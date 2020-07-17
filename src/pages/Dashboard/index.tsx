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
      <s.Info>
        <span className="cashier">
          CAIXA ABERTO
        </span>
        <span className="date">
          Sexta, 10 julho 2020
        </span>
      </s.Info>
    </s.Header>
    <s.CardContainer>
      <s.Card>
        <header>
          <p>Dinheiro</p>
          <FiDollarSign size="24px" color="green" />
        </header>
        <section>
          <p>R$</p>
          <h1>0,00</h1>
        </section>
      </s.Card>
      <s.Card>
        <header>
          <p>Cartão</p>
          <FiCreditCard size="24px" color="orange" />
        </header>
        <section>
          <p>R$</p>
          <h1>0,00</h1>
        </section>
      </s.Card>
      <s.Card>
        <header>
          <p>Total Geral</p>
          <FiHardDrive size="24px" color="grey" />
        </header>
        <section>
          <p>R$</p>
          <h1>0,00</h1>
        </section>
      </s.Card>
    </s.CardContainer>
    <s.Search>
      <FiSearch size="24px" color="grey" />
      <s.SearchInput placeholder="Consultar Material" />
    </s.Search>
  </Layout>
);

export default Dashboard;
