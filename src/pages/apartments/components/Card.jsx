import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { RiCheckboxCircleFill } from "react-icons/ri";
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
                                <RiCheckboxCircleFill className="text-[32px] text-green-600" />
                            ) : (
                                <AiOutlineHeart className="text-[32px] text-gray-400" />
                            )}
                        </button>
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="apartment_item apartment_item--grid flex basis-1/3 min-h-[250px]">
                    .
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
    }).isRequired,
    isFavorite: PropTypes.func.isRequired,
    onFavoriteClick: PropTypes.func.isRequired,
    isTableView: PropTypes.bool.isRequired,
};

export default Card;
