import { Container } from "./styles"
import { ComponentT } from "./types"

export const Post: ComponentT = ({ img, tag, title, description }) => {

    return <Container>
        <img src={img as string} alt="" />
        <div className="tag">{tag}</div>
        <div className="title">{title}</div>
        <div className="mock">
            <span>Niek Bove</span>
            <span className="date">April 8, 2018 * 3k Views</span>
        </div>
        <div className="description">{description}</div>
    </Container>
}