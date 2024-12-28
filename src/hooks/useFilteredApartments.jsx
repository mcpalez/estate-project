import { useEffect, useState } from "react";

export const useFilteredApartments = (url, priceMin, priceMax) => {
    const [apartments, setApartments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchApartments = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setApartments(data.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchApartments();
    }, [url]);

    const filteredApartments = apartments.filter((apartment) => {
        const matchesPriceMin = priceMin ? apartment.cena >= priceMin : true;
        const matchesPriceMax = priceMax ? apartment.cena <= priceMax : true;
        return matchesPriceMin && matchesPriceMax;
    });

    return { apartments: filteredApartments, isLoading, error };
};
