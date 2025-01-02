import { useFavorite } from "../hooks/useFavorite";
import { useFetchApartments } from "../hooks/useFetchApartments";
import { useState } from "react";
import ViewToggle from "../components/ApartmentsList/ViewToggle";

import TabHeader from "../components/ApartmentsList/TabHeader";
import Card from "../components/ApartmentsList/Card";

function Apartments() {
    const { isFavorite, toggleFavorite } = useFavorite();
    const [isTableView, setIsTableView] = useState(true);
    const toggleView = () => setIsTableView(!isTableView);

    const { apartments } = useFetchApartments(
        "http://localhost:1337/api/mieszkania"
    );

    return (
        <>
            <ViewToggle onToggle={toggleView} isTableView={isTableView} />
            {isTableView ? <TabHeader /> : null}
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
                        isTableView={isTableView}
                    />
                ))}
            </section>
        </>
    );
}

export default Apartments;
