import React from 'react';
import {
  FiDollarSign, FiCreditCard, FiHardDrive, FiSearch,
} from 'react-icons/fi';

import {
  Header, Title, CardContainer, Card, Search, SearchInput,
} from './styled';
import Layout from '../../components/Layout';

const Dashboard: React.FC = () => (
  <Layout>
    <Header>
      <Title>Painel</Title>
    </Header>
    <CardContainer>
      <Card>
        <header>
          <p>Dinheiro</p>
          <FiDollarSign size="2em" color="green" />
        </header>
        <h1>R$ 0,00</h1>
      </Card>
      <Card>
        <header>
          <p>Cartão</p>
          <FiCreditCard size="2em" color="orange" />
        </header>
        <h1>R$ 0,00</h1>
      </Card>
      <Card>
        <header>
          <p>Total Geral</p>
          <FiHardDrive size="2em" color="grey" />
        </header>
        <h1>R$ 0,00</h1>
      </Card>
    </CardContainer>
    <Search>
      <FiSearch size="2em" color="grey" />
      <SearchInput />
    </Search>
  </Layout>
);

export default Dashboard;
