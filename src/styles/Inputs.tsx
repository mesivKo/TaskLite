import styled from "@emotion/styled";

export const StyledInput = styled.input`
    flex: 1; 
    min-width: 100px; 
    padding: ${p => p.theme.spacing(1)};
    border: 1px solid ${p => p.theme.colors.border};
    border-radius: ${p => p.theme.radius.sm};
    &:hover {
    }
`;

export const StyledTextArea = styled.textarea`
    width: 100%;
    padding: ${p => p.theme.spacing(1)};
    border: 1px solid ${p => p.theme.colors.border};
    border-radius: ${p => p.theme.radius.sm};
    font-size: ${p => p.theme.font.size.md};
    font-family: ${p => p.theme.font.family};
    background-color: ${p => p.theme.colors.surface};
    color: ${p => p.theme.colors.text};
    min-height: 80px;
    resize: vertical;
    
    &:focus {
        outline: none;
        border-color: ${p => p.theme.colors.accent};
        box-shadow: 0 0 0 2px ${p => p.theme.colors.accent}20;
    }
`;