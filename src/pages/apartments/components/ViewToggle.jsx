import { RiGalleryView2, RiTableView } from "react-icons/ri";
import { useSearchParams } from "react-router-dom";

function ViewToggle() {
    const [searchParams, setSearchParams] = useSearchParams();
    const isTableView = searchParams.get("view") !== "grid";

    const toggleView = () => {
        setSearchParams({ view: isTableView ? "grid" : "table" });
    };

    return (
        <div className="apartments-view--toggle container mx-auto px-3">
            <div className="flex gap-5 justify-end py-3">
                <button
                    onClick={toggleView}
                    className="text-[#242958] py-3 rounded-xl font-[600]"
                >
                    {isTableView ? (
                        <div className="flex items-center gap-2">
                            <RiGalleryView2 className="text-[24px] text-gray-400 md:text-[30px]" />
                        </div>
                    ) : (
                        <div className="flex items-center gap-2">
                            <RiTableView className="text-[24px] text-gray-400 md:text-[30px]" />
                        </div>
                    )}
                </button>
            </div>
        </div>
    );
}

export default ViewToggle;
