import styled from 'styled-components';
import wave from './images/wave.svg'


export const Header = styled.div`
 height: 50px;
 width: 50px;
 object-fit: cover;
 
 @media (max-width: 430px) {
    display: none;
 }
`;

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  margin: auto;
  background-image: url(${wave});
  background-repeat: no-repeat;
  background-position: bottom;
  justify-content: center;
  font-family: sans-serif;
  background-color: #7d8595;
`;

