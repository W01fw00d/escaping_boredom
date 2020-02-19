import React from 'react';

import { storiesOf } from '@storybook/react';

import Image from '../image';

import { itemImageSrc } from '../../templates/stories/roomDetailTemplate.stories';

storiesOf('1. Atoms|Image', module).add('default', () => <Image src={itemImageSrc} />);
