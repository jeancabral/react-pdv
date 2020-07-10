import React from 'react';

import links from './content';

import * as s from './styled';

const MenuLinks: React.FC = () => (
  <s.MenuLinksWrapper>
    <s.MenuLinksList>
      {links.map((link, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <s.MenuLinksItem key={i}>
          <s.MenuLinksLink to={link.url}>
            {link.label}
          </s.MenuLinksLink>
        </s.MenuLinksItem>
      ))}
    </s.MenuLinksList>
  </s.MenuLinksWrapper>
);

export default MenuLinks;
