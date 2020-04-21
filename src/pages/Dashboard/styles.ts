import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  margin-top: 80px;
  max-width: 500px;
  line-height: 56px;
`;
export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: #fff 1px solid;
    border-right: none;
    border-radius: 5px 0 0 5px;
    color: #555;
    ${(props) =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #999;
    }
  }

  button {
    width: 210px;
    height: 70px;
    border: none;
    background: #04d361;
    color: #fff;
    border-radius: 0 5px 5px 0;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 50px;
  max-width: 700px;

  a {
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 24px;
    text-decoration: none;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }

    div {
      margin-left: 16px;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 15px;
        color: #3d3d4d;
        margin-top: 4px;
      }
    }
    svg {
      margin-left: auto;
      color: #555;
    }
  }
`;

export const Error = styled.span`
  font-size: 16px;
  color: #c53030;
  margin-top: 8px;
  display: block;
`;
