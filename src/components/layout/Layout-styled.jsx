import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.colorBackground};
    color: ${(props) => props.theme.colorText};
    font-family: 'Roboto', sans-serif;
    font-size: 1.5rem;
    font-weight: 300;
    text-align: center;
    letter-spacing: 0.1rem;
    line-height: 1.5;    
`;
