import styled from 'styled-components';

const Container = styled.div`
  max-width: 100%;
  background: #2929299c;
  border-radius: 4px;
  box-shadow: 0 0 25px rgb(113 89 193 / 70%);
  padding: 30px;
  margin: 20px auto;

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1px;

    svg {
      margin-right: 10px;
    }
  }
`;

export default Container;