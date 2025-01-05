const initialState = {
  favorites: JSON.parse(localStorage.getItem('favorites')) || [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      const updatedFavorites = [...state.favorites, action.payload];
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      return { ...state, favorites: updatedFavorites };
    case 'REMOVE_FAVORITE':
      const filteredFavorites = state.favorites.filter(item => item.id !== action.payload.id);
      localStorage.setItem('favorites', JSON.stringify(filteredFavorites));
      return { ...state, favorites: filteredFavorites };
    default:
      return state;
  }
};

export default reducer;
