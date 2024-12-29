import PropTypes from "prop-types";
import Select from "react-select";

const priceOptions = [
    { value: "", label: "Dowolne" },
    { value: "100000", label: "100 000" },
    { value: "150000", label: "150 000" },
    { value: "200000", label: "200 000" },
    { value: "300000", label: "300 000" },
    { value: "400000", label: "400 000" },
    { value: "500000", label: "500 000" },
    { value: "600000", label: "600 000" },
];

function Filter({ priceMin, priceMax, onFilterChange }) {
    const handlePriceMin = (selectedOption) => {
        onFilterChange("price_min", selectedOption?.value || "");
    };

    const handlePriceMax = (selectedOption) => {
        onFilterChange("price_max", selectedOption?.value || "");
    };

    return (
        <div>
            <div className="container mx-auto px-3 py-2">
                <div className="flex gap-5">
                    <div className="flex-grow-[3]">
                        <Select
                            value={priceOptions.find(
                                (option) => option.value === priceMin
                            )}
                            options={priceOptions}
                            onChange={handlePriceMin}
                            isClearable
                        />
                    </div>
                    <div className="flex-grow-[3]">
                        <Select
                            value={priceOptions.find(
                                (option) => option.value === priceMax
                            )}
                            options={priceOptions}
                            onChange={handlePriceMax}
                            isClearable
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

Filter.propTypes = {
    priceMin: PropTypes.string,
    priceMax: PropTypes.string,
    onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
