import React from 'react';

import { storiesOf } from '@storybook/react';

import details from '../../../public/storybook_fake_data/room-details.json';
import ProductImageFooter from '../productImageFooter';

const data = {
  name: details.name,
  price: details.price,
  likeCount: details.likeCount,
};

storiesOf('2. Molecules|ItemList.ProductImageFooter', module).add('default', () => (
  <ProductImageFooter data={data} />
));
