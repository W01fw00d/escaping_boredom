import React from 'react';

import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';

import ItemListProduct from '../itemListProduct';

import { productData as data } from '../../templates/stories/itemListTemplate.stories';

storiesOf('3. Organisms|ItemList.Product', module)
  .addDecorator(StoryRouter())
  .add('default', () => <ItemListProduct data={data} />);
