import React from 'react';

import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { ThemeProvider } from '@material-ui/core';
import theme from '../../styles/global-styles';

import ItemListTemplate from '../itemListTemplate';

const itemListHeaderLiterals = {
  search: 'Search',
};
const literals = {
  ...itemListHeaderLiterals,
};

const categories = [
  {
    id: '1',
    name: 'インテリア',
  },
  {
    id: '2',
    name: 'レディース',
  },
  {
    id: '3',
    name: 'ベビー・キッズ',
    isCurrent: true,
  },
  {
    id: '4',
    name: 'エンタメ',
  },
  {
    id: '5',
    name: 'メンズ',
  },
];

const itemList = [
  {
    id: '1',
    name: 'men1',
    description: 'size free 1',
    likeCount: 91,
    commentCount: 59,
    price: 51,
    isSoldOut: false,
    shippingFee: '送料込み',
    image: 'http://dummyimage.com/400x400/000/fff?text=men1',
    categoryId: 1,
  },
  {
    id: '2',
    name: 'men2',
    description: 'size free 1',
    likeCount: 0,
    commentCount: 0,
    price: 10000,
    isSoldOut: true,
    shippingFee: '送料込み',
    image: 'http://dummyimage.com/400x400/000/fff?text=men2',
    categoryId: 2,
  },
  {
    id: '3',
    name: 'men3',
    description: 'size free 1',
    likeCount: 17,
    commentCount: 58,
    price: 1500,
    isSoldOut: false,
    shippingFee: '送料込み',
    image: 'http://dummyimage.com/400x400/000/fff?text=men3',
    categoryId: 3,
  },
];

const productData = itemList[0];
const footerData = {
  name: productData.name,
  price: productData.price,
  likeCount: productData.likeCount,
};

const search = '';

const getThemeProviderDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

storiesOf('4. Templates|ItemList', module)
  .addDecorator(StoryRouter())
  .addDecorator(getThemeProviderDecorator)
  .add('default', () => (
    <ItemListTemplate
      literals={literals}
      search={search}
      itemList={itemList}
      categories={categories}
      handleChange={action('Input detected on ItemListTemplate')}
      handleClick={action('Button on ItemListTemplate clicked')}
    />
  ));

export { itemListHeaderLiterals, categories, productData, footerData, search };
