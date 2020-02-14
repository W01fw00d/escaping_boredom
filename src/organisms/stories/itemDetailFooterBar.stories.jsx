import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ItemDetailFooterBar from '../itemDetailFooterBar';

import {
  footerBarLiterals,
  footerBarData,
} from '../../templates/stories/itemDetailTemplate.stories';

storiesOf('3. Organisms|ItemDetail.Footer', module).add('default', () => (
  <ItemDetailFooterBar
    literals={footerBarLiterals}
    data={footerBarData}
    handleClick={action('Button on ItemDetailFooterBar clicked')}
  />
));
