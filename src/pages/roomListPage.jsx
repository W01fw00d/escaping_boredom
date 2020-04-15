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
