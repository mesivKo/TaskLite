import styled from "@emotion/styled";

export const Wrapper = styled.div`
    font-family: ${p => p.theme.font.family};
    padding: ${p => p.theme.spacing(4)} ${p => p.theme.spacing(60)};
    display: flex;
    flex-direction: column;
    gap: ${p => p.theme.spacing(2)};


    h1 {
        font-size: 24px; 
        color: ${p => p.theme.colors.text};
        font-weight: ${p => p.theme.font.weight.bold};
    }

    h5 {
        font-size: ${p => p.theme.font.size.md}; 
        color: ${p => p.theme.colors.textMuted};
        font-weight: ${p => p.theme.font.weight.regular};
    }

    p {
        font-size: ${p => p.theme.font.size.sm}; 
        color: ${p => p.theme.colors.textMuted};
        font-weight: ${p => p.theme.font.weight.regular};
    }
`;

export const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const SmallRowContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: ${p => p.theme.spacing(1)};
`;

export const SmallColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${p => p.theme.spacing(1)};
`;