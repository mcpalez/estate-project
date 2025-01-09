import { Link } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import PropTypes from "prop-types";

function Card({ apartment, isFavorite, onFavoriteClick, isTableView }) {
    if (isTableView) {
        return (
            <>
                <div className="apartment_item apartment_item--table flex items-center w-full border-b-[1px] border-slate-200 py-2">
                    <Link
                        to={`/mieszkania/${apartment.id}`}
                        className="flex-grow"
                    >
                        <div className="flex items-center">
                            <div className="apartmentList__investition flex-none w-[150px] font-[700] xl:w-[300px] font-[400] p-[6px] pl-0 hidden md:block">
                                {apartment.inwestycja}
                            </div>
                            <div className="apartmentList__name flex-none w-[150px] xl:w-[250px] font-[400] p-[6px] pl-0">
                                {apartment.nazwa}
                            </div>
                            <div className="apartmentList__pietro flex-none w-[60px] lg:w-[80px] font-[400] text-center p-[6px] pl-0 hidden md:block">
                                {apartment.pietro}
                            </div>
                            <div className="apartmentList__rooms flex-none w-[60px] lg:w-[80px] rounded text-center p-[6px] flex items-center justify-center">
                                <div className="w-[40px] bg-gray-100 rounded py-[7px] text-center">
                                    {apartment.liczba_pokoi}
                                </div>
                            </div>
                            <div className="apartmentList__area flex-none w-[90px] md:w-[100px] xl:w-[150px] font-[700] text-right p-[6px]">
                                {apartment.metraz} m²
                            </div>
                            <div className="apartmentList__features flex-none w-[150px] text-center p-[6px] hidden md:block">
                                {apartment.balkon === true ? "Tak" : "Nie"}
                            </div>
                            <div className="apartmentList__price flex-none w-[150px] text-center p-[6px] hidden lg:block">
                                {apartment.cena} PLN
                            </div>
                        </div>
                    </Link>
                    <div className="apartmentList__save flex items-center justify-end w-[80px] p-[6px] pr-0">
                        <button
                            onClick={() => {
                                onFavoriteClick(apartment);
                            }}
                        >
                            {isFavorite(apartment.id) ? (
                                <AiFillHeart className="text-[28px] text-blue-600" />
                            ) : (
                                <AiOutlineHeart className="text-[28px] text-gray-400" />
                            )}
                        </button>
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="apartment_item apartment_item--grid flex-grow flex-shrink basis-1/2 md:basis-1/3 lg:basis-1/4 min-h-[250px] border-[1px] border-gray-300 rounded-[5px] bg-white py-7 px-7">
                    <div className="apartment__item--grid__header flex justify-between">
                        <div
                            className={`${apartment.status === "Sprzedane" ? "bg-slate-400 text-white " : "border-[1px] border-blue-700 text-blue-700"} flex items-center justify-center px-3 text-[12px] font-[500] uppercase rounded`}
                        >
                            {apartment.status}
                        </div>
                        <button
                            onClick={() => {
                                onFavoriteClick(apartment);
                            }}
                        >
                            {isFavorite(apartment.id) ? (
                                <AiFillHeart className="text-[28px] text-red-600" />
                            ) : (
                                <AiOutlineHeart className="text-[28px] text-themeBlue" />
                            )}
                        </button>
                    </div>
                    <div className="apartment__item--grid__thumbnail">
                        <div className="min-h-[30px]"></div>
                    </div>
                    <div className="apartment__item--grid__content">
                        <div className="flex flex-col pb-4">
                            <div className="apartment__item--grid__investition">
                                <span className="uppercase text-[12px] tracking-widest text-gray-500 font-[500]">
                                    {apartment.inwestycja}
                                </span>
                            </div>
                            <div className="apartment__item--grid__name pb-8">
                                <span className="text-[26px] font-[500] tracking-tighter text-themeBlue">
                                    {apartment.nazwa}
                                </span>
                            </div>
                            <div className="apartment__item--grid__table flex justify-between border-t-[1px] border-slate-200 pt-4">
                                <div className="grid__table_tab pr-5">
                                    <div className="uppercase text-[12px] text-gray-500 font-[500]">
                                        Metraż:
                                    </div>
                                    <div>{apartment.metraz} m²</div>
                                </div>
                                <div className="grid__table_tab pr-5">
                                    <div className="uppercase text-[12px] text-gray-500 font-[500]">
                                        Piętro:
                                    </div>
                                    <div>{apartment.pietro}</div>
                                </div>
                                <div className="grid__table_tab pr-5">
                                    <div className="uppercase text-[12px] text-gray-500 font-[500]">
                                        Pokoje:
                                    </div>
                                    <div>{apartment.liczba_pokoi}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="apartment__item--grid__footer">
                        <div className="flex flex-col items-center pt-4 border-t-[1px] border-slate-200">
                            <div className="text-[23px] text-themeBlue font-[500]">
                                <span className="font-[600]">
                                    {(apartment.cena / apartment.metraz)
                                        .toFixed(2)
                                        .toLocaleString("pl-PL")}
                                </span>
                                zł/m²
                            </div>
                            <div className="text-[13px] text-gray-600">
                                Razem: {apartment.cena.toLocaleString("pl-PL")}{" "}
                                zł
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

Card.propTypes = {
    apartment: PropTypes.shape({
        id: PropTypes.number.isRequired,
        nazwa: PropTypes.string.isRequired,
        inwestycja: PropTypes.string.isRequired,
        pietro: PropTypes.number.isRequired,
        liczba_pokoi: PropTypes.number.isRequired,
        metraz: PropTypes.number.isRequired,
        balkon: PropTypes.bool,
        cena: PropTypes.number,
        status: PropTypes.string,
    }).isRequired,
    isFavorite: PropTypes.func.isRequired,
    onFavoriteClick: PropTypes.func.isRequired,
    isTableView: PropTypes.bool.isRequired,
};

export default Card;
