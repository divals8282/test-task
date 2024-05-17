import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    font-style: Roboto;
    .posts-list {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        margin-top: 50px;
        justify-content: center;
        padding: 0 10px;
        gap: 40px;
        @media only screen and (max-width: 1180px) {
            grid-template-columns: 1fr 1fr;
        }
        @media only screen and (max-width: 800px) {
            grid-template-columns: 1fr;
        }
    }
`