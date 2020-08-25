/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-param-reassign */
import produce from 'immer';

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

export interface Action {
  type: string;
  payload: Product
}

export default function cart(state = [] as Product[], action: Action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return produce(state, (draft: Product[]) => {
        const prodIndex = draft.findIndex((p: Product) => action.payload.id === p.id);

        if (prodIndex >= 0) {
          draft[prodIndex].amount += 1;
        } else {
          draft.push({
            ...action.payload,
            amount: 1,
          });
        }
      });

    default:
      return state;
  }
}
