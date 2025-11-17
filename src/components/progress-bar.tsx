import styled from "@emotion/styled";

const ProgressBarContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${p => p.theme.spacing(0.5)};
`;
const ProgressContainer = styled.div`
    width: 100%;
    height: ${p => p.theme.spacing(1)};
    background: ${p => p.theme.colors.surface};
    border-radius: ${p => p.theme.radius.lg};
    overflow: hidden;
`;

const Progress = styled.div<{ percent: number }>`
    height: 100%;
    width: ${p => p.percent}%;
    background: linear-gradient(to right, ${p => p.theme.colors.accent}, ${p => p.theme.colors.accentHover});
    transition: width 0.45s;
    border-radius: ${p => p.theme.radius.lg};
`;

type ProgressBarProps = {
    percent: number;
};

export default function ProgressBar(props: ProgressBarProps) {
    return(
        <ProgressBarContainer>
            <ProgressContainer>
                <Progress percent={props.percent}>
                </Progress>
            </ProgressContainer>
            <h5>Завершено: {props.percent}%</h5>
        </ProgressBarContainer>
    )
}