import styled from "@emotion/styled";
import type { Task } from "../entitites/task";
import { useEffect, useRef, useState } from "react";
import { IconButton } from "../styles/Buttons";
import { SmallColumnContainer, SmallRowContainer } from "../styles/Containers";


type TaskItemProps = {
    task: Task;
    onRemove: (id: string) => void;
    onEdit: (task: Task) => void;
    onToggle: (id: string) => void;
};


const StyledItem = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: ${p => p.theme.spacing(1)} ${p => p.theme.spacing(1)};
    background-color: ${p => p.theme.colors.background};
    border: 1px solid ${p => p.theme.colors.border};
    border-radius: ${p => p.theme.radius.sm};
    cursor: pointer; 
    transition: background 0.2s;
    &:hover {
        border: 1px solid ${p => p.theme.colors.accent};
    }
`;

const TaskTitle = styled.h3<{complete:boolean}>`
    color: ${p => (p.complete ? p.theme.colors.textMuted : p.theme.colors.text)};
    font-weight: ${p => p.theme.font.weight.medium};
    font-size: ${p => p.theme.font.size.md};
    text-decoration: ${p => (p.complete ? 'line-through': 'none')}
`;


export function TaskItem(props: TaskItemProps) {
    const [showDesc, setShowDesc] = useState(false);
    const ref = useRef<HTMLLIElement>(null);

    const handleVisDesc = () => setShowDesc((prev) => !prev);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setShowDesc(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);


    return (
        <StyledItem>
            <SmallColumnContainer>
                <SmallRowContainer>
                    <TaskTitle complete={props.task.complete} onClick={() => props.onToggle(props.task.id)} >{props.task.title}</TaskTitle>
                    {props.task.description && (
                        <IconButton onClick={handleVisDesc}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="3.5" cy="12.5" r="1.5" fill="#757575"/>
                                <circle cx="12" cy="12.5" r="1.5" fill="#757575"/>
                                <circle cx="20.5" cy="12.5" r="1.5" fill="#757575"/>
                            </svg></IconButton>
                    )}
                        {showDesc && props.task.description && (
                        <p>
                            {props.task.description}
                        </p>
                    )}
                </SmallRowContainer>
                <p>
                    {(() => {
                        const date = new Date(props.task.created);
                        const d = date.toLocaleDateString("ru-RU", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "2-digit",
                        });
                        const t = date.toLocaleTimeString("ru-RU", {
                            hour: "2-digit",
                            minute: "2-digit",
                        });
                        return `${d}, ${t}`;
                    })()}
                </p>
            </SmallColumnContainer>
            <SmallRowContainer>
                <IconButton onClick={ () => props.onEdit(props.task)}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path 
                            d="M21.174 6.81201C21.7027 6.28344 21.9998 5.56648 21.9999 
                            4.81887C22 4.07125 21.7031 3.35422 21.1745 2.82551C20.6459 
                            2.29681 19.929 1.99973 19.1813 1.99963C18.4337 1.99954 17.7167 
                            2.29644 17.188 2.82501L3.842 16.174C3.60981 16.4055 3.43811 
                            16.6905 3.342 17.004L2.021 21.356C1.99515 21.4425 1.9932 21.5344 
                            2.01535 21.6219C2.03749 21.7094 2.08292 21.7892 2.14679 21.853C2.21067 
                            21.9168 2.29062 21.9621 2.37815 21.9841C2.46569 22.0061 2.55755 22.004 
                            2.644 21.978L6.997 20.658C7.31017 20.5628 7.59517 20.3921 7.827 20.161L21.174 6.81201Z" 
                            stroke="#757575" 
                            stroke-width="1.5" 
                            stroke-linecap="round" 
                            stroke-linejoin="round"/>
                    </svg>

                </IconButton>
                <IconButton onClick={ () => props.onRemove(props.task.id)}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path 
                            d="M22 2L2 22M2 2L22 22" 
                            stroke="#BF616A" 
                            stroke-width="1.5" 
                            stroke-linecap="round" 
                            stroke-linejoin="round"/>
                    </svg>
                </IconButton>
            </SmallRowContainer>
        </StyledItem>
    );

};