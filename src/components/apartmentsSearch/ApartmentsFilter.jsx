import PropTypes from "prop-types";

function ApartmentsFilter({ priceMin, priceMax, onFilterChange }) {
    return (
        <div>
            <label>Cena</label>
            <select
                value={priceMin}
                onChange={(e) => onFilterChange("price_min", e.target.value)}
            >
                <option value="">Dowolne</option>
                <option value="100000">100 000</option>
                <option value="150000">150 000</option>
                <option value="200000">200 000</option>
                <option value="300000">300 000</option>
                <option value="400000">400 000</option>
                <option value="500000">500 000</option>
                <option value="600000">600 000</option>
            </select>
            <select
                value={priceMax}
                onChange={(e) => onFilterChange("price_max", e.target.value)}
            >
                <option value="">Dowolne</option>
                <option value="100000">100 000</option>
                <option value="150000">150 000</option>
                <option value="200000">200 000</option>
                <option value="300000">300 000</option>
                <option value="400000">400 000</option>
                <option value="500000">500 000</option>
                <option value="600000">600 000</option>
            </select>
        </div>
    );
}

ApartmentsFilter.propTypes = {
    priceMin: PropTypes.string,
    priceMax: PropTypes.string,
    onFilterChange: PropTypes.func.isRequired,
};

export default ApartmentsFilter;
