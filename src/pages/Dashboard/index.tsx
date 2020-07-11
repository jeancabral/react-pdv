import React from 'react';
import {
  FiDollarSign, FiCreditCard, FiHardDrive, FiSearch,
} from 'react-icons/fi';

import * as s from './styled';
import Layout from '../../components/Layout';

const Dashboard: React.FC = () => (
  <Layout>
    <s.Header>
      <s.Title>Painel</s.Title>
    </s.Header>
    <s.CardContainer>
      <s.Card>
        <header>
          <p>Dinheiro</p>
          <FiDollarSign size="2em" color="green" />
        </header>
        <h1>R$ 0,00</h1>
      </s.Card>
      <s.Card>
        <header>
          <p>Cartão</p>
          <FiCreditCard size="2em" color="orange" />
        </header>
        <h1>R$ 0,00</h1>
      </s.Card>
      <s.Card>
        <header>
          <p>Total Geral</p>
          <FiHardDrive size="2em" color="grey" />
        </header>
        <h1>R$ 0,00</h1>
      </s.Card>
    </s.CardContainer>
    <s.Search>
      <FiSearch size="2em" color="grey" />
      <s.SearchInput />
    </s.Search>
  </Layout>
);

export default Dashboard;
