import {Button } from '../styles/Buttons';
import { useState } from 'react';
import { SmallRowContainer } from '../styles/Containers';
import { StyledInput } from '../styles/Inputs';

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
