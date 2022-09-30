import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    margin: auto;
    align-items: center;
    justify-content: center;
    margin-top: 70px;
`;

export const input = styled.input`
    border-radius: 10px;
    border: 0 solid;
    height: 25px;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
`;