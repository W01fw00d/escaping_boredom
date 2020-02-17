import React from 'react';

import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { ThemeProvider } from '@material-ui/core';
import theme from '../../styles/global-styles';

import RoomDetailTemplate from '../roomDetailTemplate';

const buttonsRowLiterals = {
  like: 'Like!',
  comment: 'Comment',
};
const descriptionSectionLiterals = {
  description: 'Description',
};
const footerBarLiterals = {
  buy: 'Book',
};
const literals = {
  ...buttonsRowLiterals,
  ...descriptionSectionLiterals,
  ...footerBarLiterals,
};

const name = 'room1';
const imageSrc = 'https://dummyimage.com/400x400/000/fff?text=room1';
const likeCount = 1;
const description = 'size free 1';
const footerBarData = {
  price: 51,
  isGroupPrice: '送料込み',
};
const data = {
  name,
  imageSrc,
  likeCount,
  description,
  ...footerBarData,
};

const getThemeProviderDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

storiesOf('4. Templates|RoomDetail', module)
  .addDecorator(StoryRouter())
  .addDecorator(getThemeProviderDecorator)
  .add('default', () => (
    <RoomDetailTemplate literals={literals} data={data} handleClick={action('Button clicked')} />
  ));

export {
  buttonsRowLiterals,
  descriptionSectionLiterals,
  footerBarLiterals,
  name as itemName,
  likeCount,
  imageSrc as itemImageSrc,
  likeCount as itemLikeCount,
  description,
  footerBarData,
};
