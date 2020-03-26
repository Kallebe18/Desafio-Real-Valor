import styled from 'styled-components';

export const GraphContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px; 
  height: 400px;

  @media(max-width: 600px) {
    padding: 0;
    margin: 10px 0;
    height: 350px;
  }
`