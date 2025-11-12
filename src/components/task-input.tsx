import styled from '@emotion/styled';
import {Button } from '../styles/Buttons';
import { useState } from 'react';
import { SmallRowContainer } from '../styles/Containers';

export const StyledInput = styled.input`
    flex: 1; 
    min-width: 100px; 
    padding: ${p => p.theme.spacing(1)};
    border: 1px solid ${p => p.theme.colors.border};
    border-radius: ${p => p.theme.radius.sm};
    &:hover {
    }
`;

type TaskInputProp = {
    onAdd: (text: string) => void;
    
};

export default function TaskInput(props: TaskInputProp) {
    const [text, setText] = useState('');
    return (
        <SmallRowContainer>
            <StyledInput
                placeholder="Введите текст"
                value={text}
                onChange={event => setText(event.target.value)}
                type="text"
            />
            <Button 
                onClick={() => props.onAdd(text)}
                text="Добавить"
            />
        </SmallRowContainer>
    );
}
