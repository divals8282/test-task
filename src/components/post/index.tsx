import { Container } from "./styles"
import { ComponentT } from "./types"

export const Post: ComponentT = ({ img, tags, title, text, showContent = false, onClick }) => {

    return <Container showContent={showContent} onClick={() => onClick()}>
        <img src={img as string} alt="" />
        <div className="tag">{tags}</div>
        <div className="title">{title}</div>
        <div className="mock">
            <span>Niek Bove</span>
            <span className="date">April 8, 2018 * 3k Views</span>
        </div>
        <div className="description">{text}</div>
    </Container>
}