import React from 'react';

import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { ThemeProvider } from '@material-ui/core';
import theme from '../../styles/global-styles';

import ItemListTemplate from '../roomListTemplate';

const itemListHeaderLiterals = {
  search: 'Search',
};
const literals = {
  ...itemListHeaderLiterals,
};

const tags = [
  {
    id: '1',
    name: 'Terror',
  },
  {
    id: '2',
    name: 'Acting',
  },
  {
    id: '3',
    name: 'Outside',
    isCurrent: true,
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
    image: 'fake_imgs/room.jpg',
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
    image: 'fake_imgs/room.jpg',
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
    image: 'fake_imgs/room.jpg',
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

storiesOf('4. Templates|RoomList', module)
  .addDecorator(StoryRouter())
  .addDecorator(getThemeProviderDecorator)
  .add('default', () => (
    <ItemListTemplate
      literals={literals}
      search={search}
      itemList={itemList}
      tags={tags}
      handleChange={action('Input detected')}
      handleClick={action('Button clicked')}
    />
  ));

export { itemListHeaderLiterals, tags, productData, footerData, search };
