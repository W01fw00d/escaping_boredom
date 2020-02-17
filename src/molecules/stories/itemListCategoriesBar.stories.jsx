import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ItemListCategoriesBar from '../itemListCategoriesBar';

import { tags } from '../../templates/stories/itemListTemplate.stories';

storiesOf('2. Molecules|ItemList.CategoriesBar', module).add('default', () => (
  <ItemListCategoriesBar
    tags={tags}
    handleClick={action('IconButton on ItemListCategoriesBar clicked')}
  />
));
