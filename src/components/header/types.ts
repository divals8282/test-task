interface PropsI {
    onSearch: (value: string) => void
}

export type ComponentT = (props: PropsI) => JSX.Element