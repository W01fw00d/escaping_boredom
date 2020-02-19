import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getRoomDetails } from '../utils/request';
import ItemDetailTemplate from '../templates/roomDetailTemplate';

export default function RoomDetailPage() {
  const literals = {
    like: 'Like!',
    comment: 'Comment',
    description: 'Description',
    buy: 'Book',
  };

  const [data, setData] = useState();
  const { itemId } = useParams();

  useEffect(() => {
    getRoomDetails(itemId, result => {
      if (result) {
        setData({
          name: result.name,
          image: result.image,
          likeCount: result.likeCount,
          description: result.description,
          price: result.price,
          isGroupPrice: result.isGroupPrice,
        });
      }
    });
  }, [itemId]);

  return <ItemDetailTemplate literals={literals} data={data} handleClick={() => {}} />;
}
