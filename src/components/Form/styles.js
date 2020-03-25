import styled from 'styled-components';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 350px;
  font-size: 18px;
  margin-top: 20px;

  label {
    margin-top: 10px
  }

  input {
    height: 35px;
    font-size: 18px;
    padding: 5px 10px;
  }

  input[type="submit"] {
    margin-top: 10px;
    cursor: pointer;
    background-color: #439;
    color: #fff;
    font-weight: bold;
    border: 2px solid #000;

    :hover {
      background-color: #75b;
    }

    transition: all 1s;
  }
`

export default FormContainer;