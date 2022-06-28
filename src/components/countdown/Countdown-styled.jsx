import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;    
`;

export const CountdownContainer = styled.div`
    width: 100%;
    height: 100%;
`;

export const TheCountdown = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const CountdownBtn = styled.button`
    width: max-content;
    height: min-content;
    margin: 0.5rem;
    padding: 0;
    background-color: transparent;
    color: ${(props) => props.theme.colorText};
    border: none;
    border-bottom: 2px solid ${(props) => props.theme.colorText};
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
`;

export const CountdownBtnPlayPause = styled.button`
    width: max-content;
    height: min-content;
    margin: 0.5rem;
    padding: 0.5rem;
    background-color: ${(props) => props.theme.colorBtnPrimary};
    color: ${(props) => props.theme.colorText};
    border: none;
    border-radius: 0.2rem;
    outline: none;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
`;

export const CountdownBtnReset = styled.button`
    width: max-content;
    height: min-content;
    margin: 0.5rem;
    padding: 0.5rem;
    background-color: ${(props) => props.theme.colorBtnSecondary};
    color: ${(props) => props.theme.colorText};
    border: none;
    border-radius: 0.2rem;
    outline: none;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
`;