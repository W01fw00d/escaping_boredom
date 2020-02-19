import React from 'react';

import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ItemDetailAppBar from '../itemDetailHeader';

import { itemName } from '../../templates/stories/roomDetailTemplate.stories';

storiesOf('3. Organisms|ItemDetail.Header', module)
  .addDecorator(StoryRouter())
  .add('default', () => (
    <ItemDetailAppBar
      name={itemName}
      handleClick={action('IconButton on ItemDetailAppBar clicked')}
    />
  ));
