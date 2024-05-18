interface PropsI {
    img: string | JSX.Element;
    tags: string;
    title: string;
    text: string;
    showContent: boolean;
    onClick: () => void
}

export type ComponentT = (props: PropsI) => JSX.Element