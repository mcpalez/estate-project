import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ApartmentDetail = () => {
    const { id } = useParams();
    const [apartment, setApartment] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchApartment = async () => {
            try {
                const response = await fetch(
                    `http://localhost:1337/api/apartments/${id}`
                );
                const data = await response.json();
                if (data.data) {
                    setApartment(data.data);
                } else {
                    setError("Nie znaleziono mieszkania");
                }
            } catch (err) {
                setError(
                    err.message || "Wystąpił problem z pobieraniem danych"
                );
            } finally {
                setIsLoading(false);
            }
        };

        fetchApartment();
    }, [id]);

    if (isLoading) {
        return <p>Ładowanie danych...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    const { nazwa, opis, liczba_pokoi, metraz, cena, balkon, pietro } =
        apartment;

    return (
        <div>
            <h1>{nazwa}</h1>
            <p>{opis}</p>
            <p>Liczba pokoi: {liczba_pokoi}</p>
            <p>Metraż: {metraz} m²</p>
            <p>Cena: {cena} zł</p>
            <p>Balkon: {balkon ? "Tak" : "Nie"}</p>
            <p>Piętro: {pietro}</p>
        </div>
    );
};

export default ApartmentDetail;
