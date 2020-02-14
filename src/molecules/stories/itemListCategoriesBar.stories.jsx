import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ItemListCategoriesBar from '../itemListCategoriesBar';

import { categories } from '../../templates/stories/itemListTemplate.stories';

storiesOf('2. Molecules|ItemList.CategoriesBar', module).add('default', () => (
  <ItemListCategoriesBar
    categories={categories}
    handleClick={action('IconButton on ItemListCategoriesBar clicked')}
  />
));
