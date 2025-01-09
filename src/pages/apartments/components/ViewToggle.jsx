import { RiGalleryView2, RiTableView } from "react-icons/ri";
import { useSearchParams } from "react-router-dom";
import { useFetchApartments } from "../../../hooks/useFetchApartments";

function ViewToggle() {
    const [searchParams, setSearchParams] = useSearchParams();
    const isTableView = searchParams.get("view") !== "grid";
    const { apartments } = useFetchApartments();

    const toggleView = () => {
        setSearchParams({ view: isTableView ? "grid" : "table" });
    };

    return (
        <div className="apartments-view--toggle container mx-auto px-4">
            <div className="flex gap-5 justify-between items-center py-3">
                <div>
                    Znaleziono:{" "}
                    <span className="font-[600]">
                        {apartments.length} wyniki
                    </span>
                </div>
                <button
                    onClick={toggleView}
                    className="text-[#242958] py-3 rounded-xl font-[600]"
                >
                    {isTableView ? (
                        <div className="flex items-center gap-2">
                            <RiGalleryView2 className="text-[24px] md:text-[28px]" />
                        </div>
                    ) : (
                        <div className="flex items-center gap-2">
                            <RiTableView className="text-[24px] md:text-[28px]" />
                        </div>
                    )}
                </button>
            </div>
        </div>
    );
}

export default ViewToggle;
