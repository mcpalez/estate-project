export const addFavorite = (apartment) => ({
  type: 'ADD_FAVORITE',
  payload: apartment,
});

export const removeFavorite = (apartment) => ({
  type: 'REMOVE_FAVORITE',
  payload: apartment,
});
