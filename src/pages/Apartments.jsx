import { useFavorite } from "../hooks/useFavorite";
import { useFetchApartments } from "../hooks/useFetchApartments";
import { useSearchParams } from "react-router-dom";
import ViewToggle from "../components/ApartmentsList/ViewToggle";
import TabHeader from "../components/ApartmentsList/TabHeader";
import Card from "../components/ApartmentsList/Card";

function Apartments() {
    const { isFavorite, toggleFavorite } = useFavorite();
    const [searchParams] = useSearchParams();
    const isTableView = searchParams.get("view") !== "grid";

    const { apartments } = useFetchApartments(
        "http://localhost:1337/api/mieszkania"
    );

    return (
        <>
            <ViewToggle />
            {isTableView ? <TabHeader /> : null}
            {apartments.length === 0 ? (
                <div className="container mx-auto px-3 py-8">
                    <p>Brak wyników</p>
                </div>
            ) : null}
            <section className="apartments-listing container mx-auto px-3 py-2">
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
            </section>
        </>
    );
}

export default Apartments;
