/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  FiDollarSign, FiCreditCard, FiHardDrive, FiSearch, FiChevronRight, FiChevronLeft, FiPlusCircle,
} from 'react-icons/fi';

import {
  CarouselProvider, Slider, Slide, ButtonBack, ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import '../../styles/carrousel.css';

import * as s from './styled';
import Layout from '../../components/Layout';

import bebidas from '../../assets/images/bebidas-icon.svg';
import frios from '../../assets/images/frios-icon.svg';
import salgados from '../../assets/images/salgados-icon.svg';
import sorvetes from '../../assets/images/sorvetes-icon.svg';
import delicatessen from '../../assets/images/delicatessen-ico.svg';
import sanduiche from '../../assets/images/sanduiche-ico.svg';
import api from '../../service/api';
import { formatPrice } from '../../utils/formatPrice';
import { ProductList } from '../../components/ProductList';

export interface Stock {
  id: number;
  amount: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  amount: number;
  image: string;
  priceFormatted: string;
}

export interface Cart {
  cart: Product[];
}

const Dashboard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get<Product[]>(
        '/products',
      );

      const data = response.data.map((product) => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  function handleAddProduct(product: Product) {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  }

  return (
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
            <p>Caixa</p>
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
      <s.CategoryContainer>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={190}
          totalSlides={6}
          visibleSlides={5}
          infinite
        >
          <Slider>
            <Slide index={0}>
              <s.CategoryItem>
                <header>
                  <p>Delicatessen</p>
                  <img src={delicatessen} alt="" />
                </header>
              </s.CategoryItem>
            </Slide>
            <Slide index={1}>
              <s.CategoryItem>
                <header>
                  <p>Frios</p>
                  <img src={frios} alt="" />
                </header>
              </s.CategoryItem>

            </Slide>
            <Slide index={2}>
              <s.CategoryItem>
                <header>
                  <p>Salgados</p>
                  <img src={salgados} alt="" />
                </header>
              </s.CategoryItem>
            </Slide>
            <Slide index={3}>
              <s.CategoryItem>
                <header>
                  <p>Bebidas</p>
                  <img src={bebidas} alt="" />
                </header>
              </s.CategoryItem>
            </Slide>

            <Slide index={4}>
              <s.CategoryItem>
                <header>
                  <p>Sorvetes</p>
                  <img src={sorvetes} alt="" />
                </header>
              </s.CategoryItem>
            </Slide>

            <Slide index={5}>
              <s.CategoryItem>
                <header>
                  <p>Sanduíches</p>
                  <img src={sanduiche} alt="" />
                </header>
              </s.CategoryItem>
            </Slide>
          </Slider>
          <ButtonBack className="buttonBack"><FiChevronLeft size="24px" color="grey" /></ButtonBack>
          <ButtonNext className="buttonNext"><FiChevronRight size="24px" color="grey" /></ButtonNext>
        </CarouselProvider>

      </s.CategoryContainer>
      <ProductList>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <span>
              <strong>{product.title}</strong>
              <p>{product.priceFormatted}</p>
            </span>

            <button type="button" onClick={() => handleAddProduct(product)}>
              <FiPlusCircle size="24px" color="grey" />
            </button>
          </li>
        ))}
      </ProductList>
    </Layout>
  );
};

export default Dashboard;
