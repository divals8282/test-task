interface PropsI {
    open: boolean;
    content: JSX.Element
    onRequestToClose: () => void
}

export type ComponentT = (props: PropsI) => JSX.Element