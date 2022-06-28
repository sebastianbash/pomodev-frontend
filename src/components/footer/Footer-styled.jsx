import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 40px;
    width: 100%;
    margin-top: auto;
    position: relative;
    background-color: ${(props) => props.theme.colorBackground};
    color: ${(props) => props.theme.colorText};
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 300;
    text-align: center;
    letter-spacing: 0.1rem;
    line-height: 1.5;
`;

export const FooterContainer = styled.footer`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const FooterContent = styled.p`

    a {
        text-decoration: none;
        color: ${(props) => props.theme.colorText};
    }
`;