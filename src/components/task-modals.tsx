import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import type { Task } from '../entitites/task';
import { StyledInput, StyledTextArea } from '../styles/Inputs';
import { SmallRowContainer } from '../styles/Containers';
import { normalizeTitle } from '../utils/validation';

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    background-color: ${p => p.theme.colors.background};
    border-radius: ${p => p.theme.radius.lg};
    padding: ${p => p.theme.spacing(3)};
    display: flex;
    gap: ${p => p.theme.spacing(2)};
    flex-direction: column;
    width: 90%;
    max-width: 450px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    border: 1px solid ${p => p.theme.colors.border};
`;

const ModalButton = styled.button<{ variant?: 'primary' | 'secondary' }>`
    padding: ${p => p.theme.spacing(1)} ${p => p.theme.spacing(2)};
    border: 1px solid;
    border-radius: ${p => p.theme.radius.sm};
    font-size: ${p => p.theme.font.size.sm};
    font-weight: ${p => p.theme.font.weight.medium};
    font-family: ${p => p.theme.font.family};
    cursor: pointer;
    transition: all 0.2s ease;
    
    ${p => p.variant === 'primary' ? `
        background-color: ${p.theme.colors.accent};
        border-color: ${p.theme.colors.accent};
        color: white;
        
        &:hover {
            background-color: ${p.theme.colors.accentHover};
            border-color: ${p.theme.colors.accentHover};
        }
    ` : `
        background-color: transparent;
        border-color: ${p.theme.colors.border};
        color: ${p.theme.colors.textMuted};
        
        &:hover {
            background-color: ${p.theme.colors.surface};
            border-color: ${p.theme.colors.textMuted};
        }
    `}
    
    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;

const ButtonGroup = styled.div`
    display: flex;
    gap: ${p => p.theme.spacing(1)};
    justify-content: flex-end;
`;

type TaskModalProps = {
    task: Task;
    onSave: (task: Task) => void;
    onClose: () => void;
};

export default function TaskModal(props: TaskModalProps) {
    const [title, setTitle] = useState(props.task.title);
    const [description, setDescription] = useState(props.task.description ?? '');
    const [deadline, setDeadline] = useState(props.task.deadline 
        ? props.task.deadline.toISOString().split('T')[0] : '');

    useEffect(() => {
        const handler = (event: KeyboardEvent) => {
            if(event.code === "Escape") props.onClose();
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [props]);

    function handleSave() {


        if (title.trim() === '') {
            return;
        }
    

        const updatedTask: Task = {
            ...props.task,
            title: normalizeTitle(title),
            description: description.trim(),
            deadline: deadline ? new Date(deadline) : null
        };
        
        props.onSave(updatedTask);
        props.onClose();
    }

    const isSaveDisabled = title.trim() === '';

    return (
        <ModalOverlay onClick={props.onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <h2>Редактирование задачи</h2>

                <StyledInput
                    id="title"
                    onChange={e => setTitle(e.target.value)}
                    value={title}
                    type="text"
                    placeholder="Название задачи"
                    autoFocus
                />

                <StyledTextArea
                    id="description"
                    onChange={e => setDescription(e.target.value)}
                    value={description}
                    placeholder="Описание задачи"
                />
                
                <SmallRowContainer>
                    <label htmlFor="deadline">Дедлайн:</label>
                    <StyledInput
                        id="deadline"
                        type="date" 
                        value={deadline}
                        onChange={e => setDeadline(e.target.value)} 
                    />
                </SmallRowContainer>
                
                <ButtonGroup>
                    <ModalButton 
                        variant="secondary" 
                        onClick={() => props.onClose()}
                    >
                        Отмена
                    </ModalButton>
                    <ModalButton 
                        variant="primary"  
                        onClick={handleSave}
                        disabled={isSaveDisabled}
                    >
                        Сохранить
                    </ModalButton>
                </ButtonGroup>
            </ModalContent>
        </ModalOverlay>
    );
}