import React from 'react';
import Profile from '../Profile';

import * as s from './styled';

const Sidebar: React.FC = () => (
  <s.SidebarWrapper>
    <Profile />
  </s.SidebarWrapper>
);

export default Sidebar;
