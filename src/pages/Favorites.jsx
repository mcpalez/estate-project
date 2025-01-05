import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../store/actions";

function Favorites() {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites);

    const handleFavoriteClick = (apartment) => {
        dispatch(removeFavorite(apartment));
    };

    return (
        <>
            <div className="container mx-auto px-3 py-3">
                <h2>Zapisane oferty</h2>
                {favorites.length === 0 ? (
                    <p>Brak mieszkań</p>
                ) : (
                    favorites.map((favorite) => (
                        <div key={favorite.id}>
                            <div>{favorite.nazwa}</div>
                            <button
                                onClick={() => handleFavoriteClick(favorite)}
                            >
                                Usun
                            </button>
                        </div>
                    ))
                )}
            </div>
        </>
    );
}

export default Favorites;
