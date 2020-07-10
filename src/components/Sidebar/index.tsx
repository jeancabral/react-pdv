import React from 'react';
import MenuLinks from '../MenuLinks';

import * as s from './styled';

const Sidebar: React.FC = () => (
  <s.SidebarWrapper>
    <MenuLinks />
  </s.SidebarWrapper>
);

export default Sidebar;
