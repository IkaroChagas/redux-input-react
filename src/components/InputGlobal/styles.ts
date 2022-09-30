import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    margin: auto;
    flex-direction: column;
    width: 200px;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`;

export const input = styled.input`
    border-radius: 10px;
    border: 0 solid;
    height: 25px;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
`;