import styled from 'styled-components';

export const Container = styled.div`
    font-family: 'Roboto';
    max-width: 360px;
    @media only screen and (max-width: 800px) {
        width: 100%;
        max-width: 100%;
    }
    img {
        max-width: 360px;
        @media only screen and (max-width: 800px) {
            width: 100%;
            max-width: 100%;
        }
    }
    .tag{
        color: red;
        font-size: 13px;
        font-weight: bold;
        margin-top: 10px;
    }
    .title {
        font-size: 24px;
        font-weight: bold;
        margin: 10px 0;
    }
    .description {
        color: #929292;
        font-size: 14px;
        margin-top: 10px;
    }
    .mock {
        font-size: 14px;
        .date {
            margin-left: 10px;
            color: #929292; 
        }
    }
`