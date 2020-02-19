import React from 'react';

import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';

import ItemListGrid from '../itemListGrid';
import ItemListProduct from '../../organisms/itemListProduct';

import { productData as data } from '../../templates/stories/roomListTemplate.stories';

const dataObjects = [
  { ...data, id: '1' },
  { ...data, id: '2' },
  { ...data, id: '3' },
];

storiesOf('2. Molecules|ItemList.Grid', module)
  .addDecorator(StoryRouter())
  .add('default', () => (
    <ItemListGrid>
      {dataObjects.map(dataObject => (
        <ItemListProduct key={dataObject.id} data={dataObject} />
      ))}
    </ItemListGrid>
  ));
