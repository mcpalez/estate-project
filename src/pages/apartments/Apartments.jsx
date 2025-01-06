import { useFavorite } from "../../hooks/useFavorite";
import { useFetchApartments } from "../../hooks/useFetchApartments";
import { useSearchParams } from "react-router-dom";

import ViewToggle from "./components/ViewToggle";
import TableHeader from "./components/TableHeader";
import Card from "./components/Card";
import Hero from "./components/Hero";

function Apartments() {
    const { isFavorite, toggleFavorite } = useFavorite();
    const [searchParams] = useSearchParams();
    const isTableView = searchParams.get("view") !== "grid";
    const { apartments } = useFetchApartments(import.meta.env.VITE_API_URL);

    const renderApartments = () => {
        if (apartments.length === 0) {
            return (
                <div className="container mx-auto px-3 py-8">
                    <p>Brak wyników</p>
                </div>
            );
        }

        return (
            <div className={isTableView ? "" : "flex flex-row flex-wrap"}>
                {apartments.map((apartment) => (
                    <Card
                        key={apartment.id}
                        apartment={apartment}
                        isFavorite={isFavorite}
                        onFavoriteClick={toggleFavorite}
                        isTableView={isTableView}
                    />
                ))}
            </div>
        );
    };

    return (
        <>
            <Hero />
            <ViewToggle />
            {isTableView && <TableHeader />}
            <section className="apartments-listing container mx-auto px-3 py-2">
                {renderApartments()}
            </section>
        </>
    );
}

export default Apartments;
