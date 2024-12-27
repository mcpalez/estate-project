import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/actions";

import ApartmentsHeroSearch from "./apartmentsSearch/ApartmentsHeroSearch";
import ApartmentsTabHeader from "./apartmentsSearch/ApartmentsTabHeader";
import ApartmentsCard from "./apartmentsSearch/ApartmentsCard";

function Apartments() {
    const [apartments, setApartments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites);

    useEffect(() => {
        const fetchApartments = async () => {
            try {
                const response = await fetch(
                    "http://localhost:1337/api/mieszkania"
                );
                const data = await response.json();
                setApartments(data.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchApartments();
    }, []);

    const isFavorite = (apartmentId) => {
        return favorites.some((favorite) => favorite.id === apartmentId);
    };

    const handleFavoriteClick = (apartment) => {
        if (isFavorite(apartment.id)) {
            dispatch(removeFavorite(apartment));
        } else {
            dispatch(addFavorite(apartment));
        }
    };

    if (isLoading) {
        return (
            <div className="container mx-auto px-3">
                <p>Ładowanie danych...</p>
            </div>
        );
    }

    if (error) {
        return <p>Błąd {error}</p>;
    }

    return (
        <>
            <ApartmentsHeroSearch />
            <ApartmentsTabHeader />
            <section className="apartments-listing container mx-auto px-4">
                {apartments.map((apartment) => (
                    <ApartmentsCard
                        key={apartment.id}
                        apartment={apartment}
                        isFavorite={isFavorite}
                        onFavoriteClick={handleFavoriteClick}
                    />
                ))}
            </section>
        </>
    );
}

export default Apartments;
