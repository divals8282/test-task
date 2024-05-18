import styled from 'styled-components';

export const Container = styled.div<{ showContent: boolean }>`
    font-family: 'Roboto';
    max-width: ${({showContent}) => showContent ? '100%' : '360px'};
    cursor: pointer;
    @media only screen and (max-width: 800px) {
        width: 100%;
    }
    img {
        max-width: ${({showContent}) => showContent ? '100%' : '360px'};
        width: ${({showContent}) => showContent ? '500px' : '360px'};
        ${({showContent}) => showContent ? '100%' : '360px'}
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
        text-overflow: ellipsis;
        overflow: hidden;
        ${({ showContent }) => {
            if (!showContent) {
                return `
                    height: 28px;
                    white-space: nowrap;
                `
            }
            return ``
        }}
    }
    .mock {
        font-size: 14px;
        .date {
            margin-left: 10px;
            color: #929292; 
        }
    }
`