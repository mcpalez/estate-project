import { useSearchParams } from "react-router";
import { useFilteredApartments } from "../hooks/useFilteredApartments";
import { useFavorite } from "../hooks/useFavorite";

import TabHeader from "../components/ApartmentsSearch/TabHeader";
import Card from "../components/ApartmentsSearch/Card";
import Filter from "../components/ApartmentsSearch/Filter";

function Apartments() {
    const [searchParams, setSearchParams] = useSearchParams("");
    const { isFavorite, toggleFavorite } = useFavorite();

    const priceMax = searchParams.get("price_max") || "";
    const priceMin = searchParams.get("price_min") || "";

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
            <section className="app-filters">
                <Filter
                    priceMin={priceMin}
                    priceMax={priceMax}
                    onFilterChange={handleFilterChange}
                />
            </section>
            <TabHeader />
            <section className="apartments-listing container mx-auto px-3 py-2">
                {apartments.length === 0 ? (
                    <div className="container mx-auto py-8">
                        <p>Brak wyników</p>
                    </div>
                ) : null}
                {apartments.map((apartment) => (
                    <Card
                        key={apartment.id}
                        apartment={apartment}
                        isFavorite={isFavorite}
                        onFavoriteClick={toggleFavorite}
                    />
                ))}
            </section>
        </>
    );
}

export default Apartments;
