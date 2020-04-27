import React, { useState, useEffect } from 'react';

import { ItemListTemplate } from 'chemistry-ui';

import { getTags, getRooms } from '../utils/request';

export default function RoomListPage() {
  const literals = {
    search: 'Search',
  };

  const [search, setSearch] = useState('');
  const [tags, setTags] = useState();
  const [items, setItems] = useState();

  useEffect(() => {
    getTags(setTags);
    getRooms(setItems);
  }, []);

  return (
    <ItemListTemplate
      literals={literals}
      authorData={{
        name: 'Gabriel Romay Machado',
        email: 'romay.gabriel@gmail.com',
        url: 'https://www.linkedin.com/in/gabriel-romay-machado-40050a114/?locale=en_US',
      }}
      projectData={{
        url: 'https://github.com/W01fw00d/escaping_boredom/blob/master/README.md',
      }}
      search={search}
      itemList={items}
      tags={tags}
      handleChange={event => {
        setSearch(event.currentTarget.value);
      }}
      handleClick={() => {}}
    />
  );
}
