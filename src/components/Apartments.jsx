import { useSearchParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/actions";
import ApartmentsTabHeader from "./apartmentsSearch/ApartmentsTabHeader";
import ApartmentsCard from "./apartmentsSearch/ApartmentsCard";
import ApartmentsFilter from "./apartmentsSearch/ApartmentsFilter";
import { useFilteredApartments } from "../hooks/useFilteredApartments";
import ApartmentsFilterModal from "./apartmentsSearch/ApartmentsFilterModal";

function Apartments() {
    const [searchParams, setSearchParams] = useSearchParams("");
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites);

    const priceMax = parseInt(searchParams.get("price_max")) || "";
    const priceMin = parseInt(searchParams.get("price_min")) || "";

    const handleFilterChange = (key, value) => {
        setSearchParams((prev) => {
            const newParams = new URLSearchParams(prev);
            if (value === "") {
                newParams.delete(key);
            } else {
                newParams.set(key, value);
            }
            return newParams;
        });
    };

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

    const { apartments, isLoading, error } = useFilteredApartments(
        "http://localhost:1337/api/mieszkania",
        priceMin,
        priceMax
    );

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
            <ApartmentsFilterModal />
            <ApartmentsFilter
                priceMin={priceMin}
                priceMax={priceMax}
                onFilterChange={handleFilterChange}
            />
            <ApartmentsTabHeader />
            <section className="apartments-listing container mx-auto px-3 py-2">
                {apartments.length === 0 ? (
                    <div className="container mx-auto py-8">
                        <p>Brak wyników</p>
                    </div>
                ) : (
                    ""
                )}
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
