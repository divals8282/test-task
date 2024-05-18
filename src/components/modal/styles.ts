import styled from 'styled-components';


export const Container = styled.div<{ open: boolean }>`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: #000000ba;
    cursor: pointer;
    display: ${({ open }) => open ? 'block' : 'none'};
    padding: 10px;
    border: 1px solid #737373;  
    .modal {
        padding: 10px;
        position: absolute;
        @media only screen and (max-width: 660px) {
            left: 0%;  
        }
        left: 10%;
        width: 80%;
        background-color: white;
        border-radius: 5px;
        display: ${({ open }) => open ? 'block' : 'none'};
        .header {
            display: flex;
            justify-content: flex-end;
            button {
                
            }
        }
    }
        
`