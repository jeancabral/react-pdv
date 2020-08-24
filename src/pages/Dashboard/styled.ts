import styled from 'styled-components';
import media from 'styled-media-query';

export const Header = styled.div`
  margin-bottom: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 48px;
  color: #292c48;
  ${media.lessThan('large')`
  padding: 0px 1.4rem;
  `}
`;

export const Info = styled.div`
  font-size: 18px;
  text-align: right;
  > span {
    display: block;
    line-height: 1.3;
    & + span {
      margin-top: 5px;
    }
  }
  > .cashier {
    color: #10b047;
  }

  > .date {
    color: #292c48;
  }
`;

export const Search = styled.div`
  display: flex;
  box-sizing: border-box;
  max-width: 100%;
  -webkit-box-align: center;
  align-items: center;
  min-width: 0px;
  min-height: 0px;
  height: 50px;
  flex-direction: row;
  margin: 40px 0;
  padding-left: 24px;
  padding-right: 24px;
  border-width: 2px;
  border-style: solid;
  border-color: rgb(218, 218, 218);
  border-image: initial;
  border-radius: 24px;

  &::placeholder{
    color: #DADADA;
  }

`;

export const SearchInput = styled.input`
  font-size: 24px;
  line-height: 24px;
  width: 100%;
  color: rgb(68, 68, 68);
  border: 0;
  padding: 0 1rem;
  outline: none;
  -webkit-font-smoothing: antialiased;
`;

export const CardContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Card = styled.div`
  background: #ffffff;
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 100%;
  flex: 1%;
  height: 126px;
  padding: 18px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  & + div {
    margin-left: 18px;
  }
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 19px;
      letter-spacing: -0.274286px;
      color: #8e99af;
    }
  }
  section {
    p {
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 19px;
      letter-spacing: -0.274286px;
      color: #8e99af;
    }
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    h1 {
      margin-top: 14px;
      font-size: 36px;
      font-weight: 100;
      line-height: 54px;
    }
  }
`;

export const CategoryContainer = styled.div`
  position: relative;
  height: 295px;
  margin: auto 10px;
  overflow: hidden;
`;

export const CategoryItem = styled.div`

background: #ffffff;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 100%;
  margin: 25px auto;
  max-width: 116px;
  height: 144px;
  padding: 18px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  transition: 0.3s;

  header {
    display: flex;
    height: 100%;
    align-items: center;
    flex-direction: column-reverse;
    justify-content: space-between;
    p {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      margin-top: 10px;
      line-height: 19px;
      letter-spacing: -0.274286px;
      color: #292c48;
    }
  }

  &:hover {
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
    transform: scale(1.2);
  }



  ${media.greaterThan('large')`
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: auto;
  margin: 25px;
  max-width: 100%;
height: auto;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  transition: 0.3s;

  header {
    display: flex;
    height: 100%;
    align-items: center;
    flex-direction: column-reverse;
    justify-content: space-between;
    p {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      margin-top: 10px;
      line-height: 19px;
      letter-spacing: -0.274286px;
      color: #292c48;
    }
  }

  &:hover {
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
    transform: scale(1.2);
  }

  `}



`;
