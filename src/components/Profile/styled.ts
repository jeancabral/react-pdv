import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const ProfileWrapper = styled.nav`
  img {
    border-radius: 64px;
    border-bottom: 12px;
  }
`;

export const ProfileList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
`;

export const ProfileItem = styled.li`
  font-size: 14px;
  color: #a7aec7;
  font-weight: 500;

  .active {
    color: #5843be;
  }
`;

export const ProfileLink = styled(Link)`
  font-size: 24px;
  line-height: 1.2;
  display: block;
  color: #292c48;
  text-decoration: none;
  transition: color 0.5s;
  margin-bottom: 7px;
  font-weight: 500;
  margin: 12px 0 8px 0;

  &:hover {
    color: #5843be;
  }
`;
