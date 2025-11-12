import styled from '@emotion/styled';

type ButtonProp = {
    text: string;
    onClick: () => void;
}

const StyledButton = styled.button`
    padding: ${p => p.theme.spacing(1)} ${p => p.theme.spacing(3)};
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.background};
    font-weight: ${p => p.theme.font.weight.medium};
    font-size: ${p => p.theme.font.size.md};
    border: 0px;
    border-radius: ${p => p.theme.radius.sm};
    cursor: pointer; 
    transition: background 0.2s;
    &:hover {
        background-color: ${p => p.theme.colors.accentHover};
    }
    &:active {
        color: ${(p) => p.theme.colors.accentHover};
    }
`;

export const SortedButton = styled.select`
    padding: ${p => p.theme.spacing(1)} ${p => p.theme.spacing(1)};
    background-color: ${p => p.theme.colors.background};
    border: 1px solid ${p => p.theme.colors.border};
    border-radius: ${p => p.theme.radius.md};
    cursor: pointer; 
    transition: background 0.2s;
    &:hover {
        border: 1px solid ${p => p.theme.colors.accent};
    }

    div {
        padding: ${p => p.theme.spacing(1)} ${p => p.theme.spacing(1)};
        background-color: ${p => p.theme.colors.background};
        border: 1px solid ${p => p.theme.colors.border};
        border-radius: ${p => p.theme.radius.md};
        cursor: pointer; 
        transition: background 0.2s;
        &:hover {
            border: 1px solid ${p => p.theme.colors.accent};
    }

`;

export const ClearButton = styled.button`
    padding: ${p => p.theme.spacing(1)} ${p => p.theme.spacing(3)};
    background-color: rgba(255, 255, 255, 0);
    color: ${p => p.theme.colors.accent};
    font-weight: ${p => p.theme.font.weight.regular};
    font-size: ${p => p.theme.font.size.md};
    border: 1px dashed ${p => p.theme.colors.accent};
    border-radius: ${p => p.theme.radius.sm};
    cursor: pointer; 
    transition: background 0.2s;
    &:hover {
        background-color: ${p => p.theme.colors.accent};
        color: ${(p) => p.theme.colors.background};
    }
    &:active {
        color: ${(p) => p.theme.colors.accent};
    }
`;

export const FilterButton = styled.button<{ active: string, filter: string }>`
    padding: ${p => p.theme.spacing(1)} ${p => p.theme.spacing(2)};
    border: none;
    border-radius: ${p => p.theme.radius.md};
    color: ${p => p.active === p.filter ? p.theme.colors.background : p.theme.colors.text};
    background: ${p => p.active === p.filter ? p.theme.colors.accent : p.theme.colors.surface};
    cursor: pointer;
    transition: background 0.2s ease;
    font-weight: ${p => p.theme.font.weight.regular};
    &:hover {
        color: ${p => p.theme.colors.background};
        background-color: ${p => p.active ? p.theme.colors.accentHover : p.theme.colors.surface};
        border-color: ${p => p.theme.colors.accentHover};
    }
`;



export const IconButton = styled.button`
    background-color: rgba(255, 255, 255, 0);
    border: none;
    color: ${p => p.theme.colors.textMuted};
`;

export function Button(props: ButtonProp) {
    return <StyledButton onClick={props.onClick}> {props.text} </StyledButton>;
}