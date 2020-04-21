import styled from 'styled-components';

export const Header = styled.header`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: color 0.2s;
    color: #a8a8b3;
    &:hover {
      color: #666;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 30px;
      display: flex;
      flex-direction: column;

      strong {
        font-size: 36px;
        margin-bottom: 5px;
        color: #3d3d4d;
      }
      span {
        font-size: 15px;
        color: #666;
      }
    }
  }

  ul {
    margin-top: 40px;
    display: flex;

    li {
      display: flex;
      flex-direction: column;
      list-style: none;
      & + li {
        margin-left: 70px;
      }

      strong {
        font-size: 36px;
        color: #343434;
      }

      span {
        font-size: 18px;
        color: #6c6c80;
      }
    }
  }
`;

export const Issues = styled.section`
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
