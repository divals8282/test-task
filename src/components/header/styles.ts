import styled from 'styled-components';

export const Container = styled.div<{ scroll: boolean, activeSearch: boolean }>`
    position: sticky;
    top: ${({scroll}) => scroll ? '-200' : '0'}px;
    transition: top .3s ease-in-out;
    background-color: white;
    .logo {
        .logo-image {
            margin-left: ${({activeSearch}) => activeSearch ? "90px" : '0px'};
        }
        @media only screen and (max-width: 800px) {
            .desktop-space {
                display: none;
            }
            .mobile-menu-button {
                display: block !important;
                margin-left: 10px;
            }
        }
        .mobile-menu-button {
            display: none;
        }
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 30px;
        border-bottom: 1px solid #E9E9E9;
        padding: 10px 0px;
        .search-bar {
            width: 100px;
            outline: 0;
        }
    }
    .search {
        cursor: pointer;
    }

    .navigation {
        @media only screen and (max-width: 800px) {
            display: none;
        }
        border-bottom: 1px solid #E9E9E9;
        margin: 10px auto 0px auto;
        height: 40px;
        display: flex;
        justify-content: center;
        gap: 20px;
        list-style: none;
        li {
            cursor: pointer;
            display: flex;
            align-items: center;
            font-family: "Roboto", sans-serif;
            svg {
                margin-left: 5px;
                width: 13px;
            }
        }
    }
`