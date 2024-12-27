import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/actions";
import { useSearchParams } from "react-router";

import ApartmentsHeroSearch from "./apartmentsSearch/ApartmentsHeroSearch";
import ApartmentsTabHeader from "./apartmentsSearch/ApartmentsTabHeader";
import ApartmentsCard from "./apartmentsSearch/ApartmentsCard";

function Apartments() {
    const [searchParams, setSearchParams] = useSearchParams("");
    const [apartments, setApartments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites);

    const priceMax = searchParams.get("price_max") || "";

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

    const handleFilterChange = (key, value) => {
        setSearchParams((prev) => {
            if (value) {
                prev.set(key, value);
            } else {
                prev.delete(key, value);
            }
            return prev;
        });
    };

    const filteredApartments = apartments.filter((apartment) => {
        const matchesPrice = priceMax ? apartment.cena <= priceMax : true;
        return matchesPrice;
    });

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
            <div>
                <label>Cena do</label>

                {/* <input
                    type="number"
                    value={price}
                    onChange={(e) =>
                        handleFilterChange("price", e.target.value)
                    }
                /> */}
                <select
                    value={priceMax}
                    onChange={(e) =>
                        handleFilterChange("price_max", e.target.value)
                    }
                >
                    <option value="250000">250 000</option>
                    <option value="500000">500 000</option>
                </select>
            </div>
            <ApartmentsHeroSearch />
            <ApartmentsTabHeader />
            <section className="apartments-listing container mx-auto px-4">
                {filteredApartments.map((apartment) => (
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
