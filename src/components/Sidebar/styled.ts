import styled from 'styled-components';
import media from 'styled-media-query';

// eslint-disable-next-line import/prefer-default-export
export const SidebarWrapper = styled.div`
  align-items: center;
  border-right: 1px solid #EDF0F3;
  background: #F9FAFB;
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  padding: 2rem;
  text-align: center;
  right: 0;
  width: 400px;

  ${media.lessThan('large')`
    align-items: flex-start;
    height: auto;
    padding: 1rem 2rem;
    width: 100%;
    bottom: 0;
  `}

`;
