import React from 'react';

import {
  FiUser, FiSliders, FiBox, FiMonitor, FiInfo,
} from 'react-icons/fi';

import * as s from './styled';

const MenuBar = () => (
  <s.MenuBarWrapper>
    <s.MenuBarGroup>
      <s.MenuBarLink to="/" title="Home">
        <s.MenuBarItem>
          <FiMonitor size="1.6em" />
        </s.MenuBarItem>
      </s.MenuBarLink>
      <s.MenuBarLink to="/product" title="Produtos">
        <s.MenuBarItem>
          <FiBox size="1.6em" />
        </s.MenuBarItem>
      </s.MenuBarLink>
    </s.MenuBarGroup>
    <s.MenuBarGroup>
      <s.MenuBarItem title="Perfil">
        <FiUser size="1.6em" />
      </s.MenuBarItem>
      <s.MenuBarItem title="Configuração">
        <FiSliders size="1.6em" />
      </s.MenuBarItem>
      <s.MenuBarLink to="/about" title="Sobre">
        <s.MenuBarItem>
          <FiInfo size="1.6em" />
        </s.MenuBarItem>
      </s.MenuBarLink>
    </s.MenuBarGroup>
  </s.MenuBarWrapper>
);

export default MenuBar;
