import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/actions";

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
                    "http://localhost:1337/api/apartments"
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
        return favorites.some((favorite) => favorite.id === apartmentId); // Sprawdź, czy mieszkanie jest ulubione
    };

    const handleFavoriteClick = (apartment) => {
        if (isFavorite(apartment.id)) {
            dispatch(removeFavorite(apartment));
        } else {
            dispatch(addFavorite(apartment));
        }
    };

    if (isLoading) {
        return <p>Ładowanie danych...</p>;
    }

    if (error) {
        return <p>Błąd {error}</p>;
    }

    return (
        <>
            <section className="apartments-hero block md:hidden container bg-[#640ebe] text-white mx-auto py-10 text-center">
                <h1 className="text-[27px] font-[900]">Nieruchomości ROBYG.</h1>
                <h2 className="text-[20px] font-[600]">
                    Więcej wiesz, lepiej wybierasz
                </h2>
            </section>
            <section className="apartment-listable container mx-auto px-3">
                <div className="flex items-center w-full text-[13px] text-[#00326f]">
                    <div className="listableHeader flex-none p-[6px] pl-0 w-[150px]">
                        Numer
                    </div>
                    <div className="listableRooms flex-none w-[60px] p-[6px] text-center">
                        Pokoje
                    </div>
                    <div className="listableArea flex-none p-[6px] w-[105px] text-right">
                        Metraz
                    </div>
                    <div className="listableSave p-[6px] pr-0 w-[80px] flex-grow text-right">
                        Opcje
                    </div>
                </div>
            </section>
            <section className="apartments-listing container mx-auto px-4">
                <div className="flex flex-wrap text-[16.4px]">
                    {apartments.map((apartment) => (
                        <div
                            key={apartment.id}
                            className="apartment-card w-full"
                        >
                            <Link
                                className="flex items-center w-full border-b-[1px] border-slate-200 py-2"
                                to={`/apartments/${apartment.documentId}`}
                            >
                                <div className="apartmentList__investition flex-none w-[150px] font-[400] text-[#00326f] p-[6px] pl-0 hidden">
                                    {apartment.inwestycja}
                                </div>
                                <div className="apartmentList__name flex-none w-[150px] font-[400] text-[#00326f] p-[6px] pl-0">
                                    {apartment.nazwa}
                                </div>
                                <div className="apartmentList__pietro flex-none w-[150px] font-[400] text-[#00326f] p-[6px] pl-0 hidden">
                                    {apartment.pietro}
                                </div>
                                <div className="apartmentList__rooms flex-none w-[60px] rounded text-center p-[6px]">
                                    <div className="w-[40px] bg-gray-200 rounded py-[7px]">
                                        {apartment.liczba_pokoi}
                                    </div>
                                </div>
                                <div className="apartmentList__area flex-none w-[105px] font-[700] text-[#00326f] text-right p-[6px]">
                                    {apartment.metraz} m²
                                </div>
                                <div className="apartmentList__features flex-none w-[105px] font-[700] text-[#00326f] text-right p-[6px] hidden">
                                    {apartment.balkon === true ? "Tak" : "Nie"}
                                </div>
                                <div className="apartmentList__price flex-none font-[700] text-[#00326f] text-right p-[6px] hidden">
                                    {apartment.cena} PLN
                                </div>
                                <div className="apartmentList__save flex items-center justify-end flex-grow text-right w-[80px] p-[6px] pr-0">
                                    <button
                                        onClick={() =>
                                            handleFavoriteClick(apartment)
                                        }
                                    >
                                        <AiFillHeart
                                            className={`${
                                                isFavorite(apartment.id)
                                                    ? "text-red-500"
                                                    : "text-gray-300"
                                            } w-6 h-6`}
                                        />
                                    </button>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Apartments;
