import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MenuBarWrapper = styled.aside`
  align-items: center;
  background: #f9fafb;
  border-left: 1px solid #edf0f3;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: flex-start;
  padding: 0.8rem 0;
  position: fixed;

  left: 0;
  width: 120px;
`;

export const MenuBarLogo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 44px 0 127px;
`;

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;
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
    color: #5843BE;
    transition: box-shadow 0.5s;
    border-radius: 2rem;
    content: '';
    box-shadow: inset 8px 16px 11px rgba(225, 229, 239, 0.76);
    z-index: 1;
  }
`;
