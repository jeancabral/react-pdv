/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React from 'react';
import { AiOutlineScan } from 'react-icons/ai';
import { MdDialpad } from 'react-icons/md';
import { useSelector } from 'react-redux';
import Profile from '../Profile';

import * as s from './styled';

export interface Props {
  isSmall?: boolean;
}

export interface Stock {
  id: number;
  amount: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  amount: number;
}

export interface Cart {
  cart: Product[];
}

const Sidebar: React.FC<Props> = ({ isSmall }) => {
  const cart = useSelector((state: Cart) => state.cart.map((product) => ({
    ...product,
  })));

  return (
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
          <s.InputBox isSmall={isSmall}>
            <s.Input id="quantity" />
            <MdDialpad size="24px" color="grey" />
          </s.InputBox>
        </div>
      </s.InputWrapper>
      <hr />
      <s.Receipt>
        <s.Item>
          <div>DESCRIÇÃO</div>
          <div>QTD</div>
        </s.Item>
        {cart.map((p) => (
          <s.Item>
            <div>{p.title}</div>
            <span>{p.amount}</span>
          </s.Item>
        ))}
      </s.Receipt>
    </s.SidebarWrapper>
  );
};

export default Sidebar;
