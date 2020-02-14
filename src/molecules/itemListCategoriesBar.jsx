import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, Grid } from '@material-ui/core';

import TextButton from '../atoms/textButton';

export default function ItemListCategoriesBar({ categories, handleClick }) {
  const useStyles = makeStyles(theme => ({
    button: {
      backgroundColor: theme.palette.primary.main,
    },
    currentCategory: {
      color: theme.palette.secondary.main,
    },
  }));
  const classes = useStyles();

  return (
    <Grid container justify="center">
      {categories.map(category => (
        <Grid key={category.id} item>
          <TextButton
            className={`${classes.button} ${category.isCurrent ? classes.currentCategory : ''}`}
            id={category.id}
            handleClick={handleClick}
          >
            {category.name}
          </TextButton>
        </Grid>
      ))}
    </Grid>
  );
}

ItemListCategoriesBar.defaultProps = {
  categories: [],
  handleClick: () => {},
};

ItemListCategoriesBar.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  handleClick: PropTypes.func,
};
