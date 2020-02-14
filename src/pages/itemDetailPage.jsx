import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getItem } from '../utils/request';
import ItemDetailTemplate from '../templates/itemDetailTemplate';

export default function ItemDetailPage() {
  const literals = {
    like: 'Like!',
    comment: 'Comment',
    description: 'Description',
    buy: 'Buy',
  };

  const [data, setData] = useState();
  const { itemId } = useParams();

  useEffect(() => {
    getItem(itemId, result => {
      if (result) {
        setData({
          name: result.name,
          imageSrc: result.image,
          likeCount: result.likeCount,
          description: result.description,
          price: result.price,
          shippingFee: result.shippingFee,
        });
      }
    });
  }, [itemId]);

  return <ItemDetailTemplate literals={literals} data={data} handleClick={() => {}} />;
}
