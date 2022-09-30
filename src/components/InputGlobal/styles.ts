import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    margin: auto;
    flex-direction: column;
    width: 350px;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`;

export const input = styled.input`
    border-radius: 10px;
    border: 0 solid;
    width: inherit;
    height: 25px;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    padding: 7px;
    padding-left: 15px;
    padding-right: 15px;
    
    &:hover {
      -webkit-box-shadow: 0px 0px 8px -1px rgba(119,74,189,0.75);
      -moz-box-shadow: 0px 0px 8px -1px rgba(119,74,189,0.75);
      box-shadow: 0px 0px 8px -1px rgba(119,74,189,0.75);
    }
`;

export const p = styled.p`
    font-weight: bold;
`;
