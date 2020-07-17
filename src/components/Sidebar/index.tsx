import React from 'react';
import Profile from '../Profile';
import { AiOutlineScan } from 'react-icons/ai';
import { MdDialpad } from 'react-icons/md';

import * as s from './styled';

export interface Props {
  isSmall?: boolean;
}

const Sidebar: React.FC<Props> = ({
  isSmall
}) => {
  return (
    <s.SidebarWrapper>
      <Profile />
      <s.InputWrapper>
        <div>
          <label htmlFor="product_cod">Cod.Product</label>
          <s.InputBox>
            <s.Input id="product_cod"></s.Input>
            <AiOutlineScan size="24px" color="grey"></AiOutlineScan>
          </s.InputBox>
        </div>
        <div>
          <label htmlFor="quantity">Quantity</label>
          <s.InputBox isSmall={true}>
            <s.Input id="quantity"></s.Input>
            <MdDialpad size="24px" color="grey"></MdDialpad>
          </s.InputBox>
        </div>
      </s.InputWrapper>
    </s.SidebarWrapper>
  );
}

export default Sidebar;
