import React from 'react';
import { AiOutlineScan } from 'react-icons/ai';
import { MdDialpad } from 'react-icons/md';
import Profile from '../Profile';

import * as s from './styled';

export interface Props {
  isSmall?: boolean;
}

const Sidebar: React.FC<Props> = ({
  isSmall,
}) => (
  <s.SidebarWrapper>
    <Profile />
    <s.InputWrapper>
      <div>
        <label htmlFor="product_cod">Cod.Product</label>
        <s.InputBox>
          <s.Input id="product_cod" />
          <AiOutlineScan size="24px" color="grey" />
        </s.InputBox>
      </div>
      <div>
        <label htmlFor="quantity">Quantity</label>
        <s.InputBox isSmall>
          <s.Input id="quantity" />
          <MdDialpad size="24px" color="grey" />
        </s.InputBox>
      </div>
    </s.InputWrapper>
  </s.SidebarWrapper>
);

export default Sidebar;
