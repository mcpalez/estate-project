import PropTypes from "prop-types";
import { RiGalleryView2, RiTableView } from "react-icons/ri";

function ViewToggle({ isTableView, onToggle }) {
    return (
        <>
            <div className="container mx-auto px-3">
                <div className="flex gap-5 justify-end py-3">
                    <button
                        onClick={onToggle}
                        className="bg-[#4855c6] text-white py-3 px-5 rounded-[50px] font-[600]"
                    >
                        {isTableView ? (
                            <div className="flex items-center gap-2">
                                <RiGalleryView2 className="text-[20px]" />
                                Kafelki
                            </div>
                        ) : (
                            <div className="flex items-center gap-2">
                                <RiTableView className="text-[20px]" />
                                Tabela
                            </div>
                        )}
                    </button>
                </div>
            </div>
        </>
    );
}

ViewToggle.propTypes = {
    isTableView: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
};

export default ViewToggle;
