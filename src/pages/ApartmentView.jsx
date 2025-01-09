import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ApartmentView = () => {
    const { id } = useParams();
    const [apartment, setApartment] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const url = import.meta.env.VITE_API_URL;
    const apiKey = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        const fetchApartment = async () => {
            try {
                const response = await fetch(`${url}?id=eq.${id}`, {
                    headers: {
                        apikey: apiKey,
                        Authorization: `Bearer ${apiKey}`,
                    },
                });

                if (!response.ok) {
                    throw new Error(
                        `Błąd ${response.status}: Nie udało się pobrać danych`
                    );
                }

                const data = await response.json();

                if (data.length === 0) {
                    setError("Nie znaleziono mieszkania");
                } else {
                    setApartment(data[0]); // Pierwszy (i jedyny) wynik
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
    }, [id, url, apiKey]);

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

export default ApartmentView;
