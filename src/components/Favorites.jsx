import { useSelector } from "react-redux";

function Favorites() {
    const favorites = useSelector((state) => state.favorites);
    return (
        <>
            <div>
                <h2>Zapisane oferty</h2>
                {favorites.length === 0 ? (
                    <p>Brak mieszkań</p>
                ) : (
                    favorites.map((favorite) => (
                        <div key={favorite.id}>{favorite.nazwa}</div>
                    ))
                )}
            </div>
        </>
    );
}

export default Favorites;
