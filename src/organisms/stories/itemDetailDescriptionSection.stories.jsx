import React from 'react';

import { storiesOf } from '@storybook/react';

import ItemDetailDescriptionSection from '../itemDetailDescriptionSection';

import {
  descriptionSectionLiterals as literals,
  description,
} from '../../templates/stories/itemDetailTemplate.stories';

storiesOf('3. Organisms|ItemDetail.DescriptionSection', module).add('default', () => (
  <ItemDetailDescriptionSection literals={literals} description={description} />
));
