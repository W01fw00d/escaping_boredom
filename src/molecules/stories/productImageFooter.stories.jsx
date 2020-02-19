import React from 'react';

import { storiesOf } from '@storybook/react';

import ProductImageFooter from '../productImageFooter';

import { footerData } from '../../templates/stories/roomListTemplate.stories';

storiesOf('2. Molecules|ItemList.ProductImageFooter', module).add('default', () => (
  <ProductImageFooter data={footerData} />
));
