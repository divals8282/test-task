import { createPortal } from "react-dom"

import { Container } from "./styles"
import { ComponentT } from "./types";

export const Modal: ComponentT = ({
    content,
    onRequestToClose,
    open
}) => {

    return createPortal((
        <Container open={open} onClick={(e) => {
            e.stopPropagation();
            onRequestToClose();
        }}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div className="header">
                    <button onClick={() => onRequestToClose()}>X</button>
                </div>
                <div className="body">
                    {content}
                </div>
            </div>
        </Container>
    ), document.querySelector('body') as HTMLBodyElement);
}