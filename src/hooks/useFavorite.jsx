import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/actions";

export const useFavorite = () => {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites);

    const isFavorite = (apartmentId) => {
        return favorites.some((favorite) => favorite.id === apartmentId);
    };

    const toggleFavorite = (apartment) => {
        if (isFavorite(apartment.id)) {
            dispatch(removeFavorite(apartment));
        } else {
            dispatch(addFavorite(apartment));
        }
    };

    return { favorites, isFavorite, toggleFavorite };
};
