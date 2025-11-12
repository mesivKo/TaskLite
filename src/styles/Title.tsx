type TitleProp = {
    title1: string;
    title2: string;
}

export function Title(props: TitleProp) {
    return <h1> Я изучаю {props.title1 + ' ' + props.title2} </h1>;
}