import styled from 'styled-components';
import { Link } from 'react-router-dom';

import media from 'styled-media-query';

export const MenuBarWrapper = styled.aside`
  align-items: center;
  background: #f9fafb;
  border-left: 1px solid #edf0f3;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: flex-start;
  padding: 0.8rem 0;
  width: 120px;

  ${media.lessThan('large')`
top: 0;
flex-direction: row;
height: 4.75rem;
padding: 0;
position: fixed;
width: 100%;
justify-content: space-evenly;
`}
`;

export const MenuBarLogo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 44px 0 127px;

  ${media.lessThan('large')`

margin: 0;
img {
  width: 32px;
} `}
`;

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;
  ${media.lessThan('large')`
    flex-direction: row;
  `}
`;

export const MenuBarLink = styled(Link)`
  display: block;
`;

export const MenuBarItem = styled.span`
  color: #8899a6;
  cursor: pointer;
  display: block;
  height: 3.85rem;
  padding: 1.1rem;
  position: relative;
  width: 3.85rem;
  &:hover {
    color: #292c48;
    transition: box-shadow 0.5s;
    border-radius: 2rem;
    content: '';
    box-shadow: inset 8px 16px 11px rgba(225, 229, 239, 0.76);
    z-index: 1;
  }
`;
