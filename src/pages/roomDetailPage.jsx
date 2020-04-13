import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getRoomDetails } from '../utils/request';

import { RoomDetailTemplate } from 'chemistry-ui';

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
        const roomData = result[0];
        setData({
          name: roomData.name,
          image: roomData.image,
          likeCount: roomData.likeCount,
          description: roomData.description,
          price: roomData.price,
          isGroupPrice: roomData.isGroupPrice,
        });
      }
    });
  }, [itemId]);

  return <RoomDetailTemplate literals={literals} data={data} handleClick={() => {}} />;
}
