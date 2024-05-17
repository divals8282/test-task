interface PropsI {
    img: string | JSX.Element;
    tag: string;
    title: string;
    description: string;
}

export type ComponentT = (props: PropsI) => JSX.Element