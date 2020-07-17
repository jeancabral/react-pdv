import styled from 'styled-components';

import { Link } from 'react-router-dom';

import media from 'styled-media-query';

export const ProfileWrapper = styled.nav`
display: flex;
flex-direction: column;
align-items: center;
  img {
    border-radius: 64px;
    border-bottom: 12px;

    ${media.lessThan('large')`
    width: 64px;
    height: 64px;
    border-radius: 32px;
    border-bottom: 12px;
  `}
  }
`;

export const ProfileList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
`;

export const ProfileItem = styled.li`
  padding: 0.5rem 0;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.34px;

  color: #a7aec7;

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
