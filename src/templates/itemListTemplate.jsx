import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

import ItemListGrid from '../molecules/itemListGrid';
import OverlayedIconButton from '../molecules/overlayedIconButton';
import ItemListHeader from '../organisms/itemListHeader';
import ItemListProduct from '../organisms/itemListProduct';

export default function ItemListTemplate({
  literals,
  search,
  itemList,
  categories,
  handleChange,
  handleClick,
}) {
  const useStyles = makeStyles(theme => ({
    layout: {
      backgroundColor: theme.palette.primary.light,
      paddingBottom: theme.spacing(4),
    },
  }));
  const classes = useStyles();

  const itemListHeaderLiterals = {
    search: literals.search,
  };

  return (
    <div className={classes.layout}>
      {categories && (
        <ItemListHeader
          literals={itemListHeaderLiterals}
          categories={categories}
          searchValue={search}
          handleChange={handleChange}
          handleClick={handleClick}
        />
      )}
      {itemList && (
        <ItemListGrid>
          {itemList.map(productData => (
            <ItemListProduct key={productData.id} data={productData} />
          ))}
        </ItemListGrid>
      )}
      <OverlayedIconButton handleClick={handleClick}>
        <PhotoCameraIcon />
      </OverlayedIconButton>
    </div>
  );
}

ItemListTemplate.defaultProps = {
  literals: {
    search: ItemListHeader.defaultProps.literals.search,
  },
  search: '',
  itemList: [],
  categories: [],
  handleChange: () => {},
  handleClick: () => {},
};

ItemListTemplate.propTypes = {
  literals: PropTypes.shape({
    search: ItemListHeader.propTypes.literals.search,
  }),
  search: PropTypes.string,
  itemList: PropTypes.arrayOf(PropTypes.object),
  categories: PropTypes.arrayOf(PropTypes.object),
  handleChange: PropTypes.func,
  handleClick: PropTypes.func,
};
