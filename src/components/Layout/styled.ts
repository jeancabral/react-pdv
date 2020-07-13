import styled from 'styled-components';
import media from 'styled-media-query';

export const LayoutWrapper = styled.section`
  display: flex;

  ${media.lessThan('large')`
    flex-direction: column;
  `}

`;

export const LayoutMain = styled.main`
  background: #fff;
  min-height: 100vh;
  padding: 0 400px 0 119px;
  width: 100%;

  ${media.lessThan('large')`
    padding: 4.125rem 0 3rem 0;
  `}

`;
