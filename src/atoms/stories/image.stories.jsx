import React from 'react';

import { storiesOf } from '@storybook/react';

import data from '../../../public/storybook_fake_data/room-details.json';

import Image from '../image';

storiesOf('1. Atoms|Image', module).add('default', () => <Image src={data.image} />);
