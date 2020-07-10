import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const MenuLinksWrapper = styled.nav``;

export const MenuLinksList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
`;

export const MenuLinksItem = styled.li`
  padding: 0.5rem 0;

  .active {
    color: #5843BE;
  }
`;
export const MenuLinksLink = styled(Link)`
  color: #AEB0BC;
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: #5843BE;
  }
`;
