import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ItemListHeader from '../itemListHeader';

import {
  itemListHeaderLiterals as literals,
  tags,
  search,
} from '../../templates/stories/roomListTemplate.stories';

storiesOf('3. Organisms|ItemList.Header', module).add('default', () => (
  <ItemListHeader
    literals={literals}
    tags={tags}
    searchValue={search}
    handleChange={action('Input detected')}
    handleClick={action('IconButton on ItemDetailAppBar clicked')}
  />
));
