import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ItemDetailButtonsRow from '../itemDetailButtonsRow';

import {
  buttonsRowLiterals as literals,
  likeCount,
} from '../../templates/stories/roomDetailTemplate.stories';

storiesOf('3. Organisms|ItemDetail.ButtonsRow', module).add('default', () => (
  <ItemDetailButtonsRow
    literals={literals}
    likeCount={likeCount}
    handleClick={action('IconButton on ItemDetailAppBar clicked')}
  />
));
