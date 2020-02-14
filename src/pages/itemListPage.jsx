import React, { useState, useEffect } from 'react';

import { getCategories, getItems } from '../utils/request';
import ItemListTemplate from '../templates/itemListTemplate';

export default function ItemListPage() {
  const literals = {
    search: 'Search',
  };

  const [search, setSearch] = useState('');
  const [categories, setCategories] = useState();
  const [items, setItems] = useState();

  useEffect(() => {
    getCategories(setCategories);
    getItems(setItems);
  }, []);

  return (
    <ItemListTemplate
      literals={literals}
      search={search}
      itemList={items}
      categories={categories}
      handleChange={event => {
        setSearch(event.currentTarget.value);
      }}
      handleClick={() => {}}
    />
  );
}
