import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import allLiterals from '../../../public/storybook_fake_data/literals.json';
import data from '../../../public/storybook_fake_data/room-details.json';

import ItemDetailFooterBar from '../itemDetailFooterBar';

const footerBarLiterals = {
  buy: allLiterals.buy,
};

const footerBarData = {
  price: data.price,
  isGroupPrice: data.isGroupPrice,
};

storiesOf('3. Organisms|ItemDetail.Footer', module).add('default', () => (
  <ItemDetailFooterBar
    literals={footerBarLiterals}
    data={footerBarData}
    handleClick={action('Button clicked')}
  />
));
