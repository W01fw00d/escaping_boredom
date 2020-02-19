import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ItemListToolbar from '../itemListToolbar';

import {
  itemListHeaderLiterals as literals,
  search,
} from '../../templates/stories/roomListTemplate.stories';

storiesOf('2. Molecules|ItemList.Toolbar', module).add('default', () => (
  <ItemListToolbar
    literals={literals}
    searchValue={search}
    handleChange={action('Input detected')}
    handleClick={action('IconButton on ItemDetailAppBar clicked')}
  />
));
