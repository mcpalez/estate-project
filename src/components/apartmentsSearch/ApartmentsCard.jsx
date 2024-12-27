import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import PropTypes from "prop-types";

function ApartmentsCard({ apartment, isFavorite, onFavoriteClick }) {
    return (
        <>
            <div className="flex items-center w-full border-b-[1px] border-slate-200 py-2">
                <Link
                    to={`/mieszkania/${apartment.documentId}`}
                    className="flex-grow"
                >
                    <div className="flex items-center">
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
                            <div className="w-[40px] bg-gray-100 rounded py-[7px]">
                                {apartment.liczba_pokoi}
                            </div>
                        </div>
                        <div className="apartmentList__area flex-none w-[100px] font-[700] text-[#00326f] text-right p-[6px]">
                            {apartment.metraz} m²
                        </div>
                        <div className="apartmentList__features flex-none w-[100px] font-[700] text-[#00326f] text-right p-[6px] hidden">
                            {apartment.balkon === true ? "Tak" : "Nie"}
                        </div>
                        <div className="apartmentList__price flex-none font-[700] text-[#00326f] text-right p-[6px] hidden">
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
                        <AiFillStar
                            className={`${
                                isFavorite(apartment.id)
                                    ? "text-[#f2d56b]"
                                    : "text-gray-300"
                            } w-6 h-6 md:hover:text-red-500`}
                        />
                    </button>
                </div>
            </div>
        </>
    );
}

ApartmentsCard.propTypes = {
    apartment: PropTypes.shape({
        id: PropTypes.number.isRequired,
        documentId: PropTypes.string.isRequired,
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
};

export default ApartmentsCard;
