import { useEffect, useState } from "react";
import { LuSlidersHorizontal } from "react-icons/lu";

function FilterModal() {
    const [isOpen, setIsOpen] = useState(false);

    const filterModalHandler = () => {
        setIsOpen((prev) => !prev);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-y-hidden");
        } else {
            document.body.classList.remove("overflow-y-hidden");
        }

        return () => {
            document.body.classList.remove("overflow-y-hidden");
        };
    }, [isOpen]);

    return (
        <>
            <div
                className={
                    isOpen === true
                        ? "filterModal_wrapper block h-full"
                        : "filterModal_wrapper hidden h-full"
                }
            >
                <div className="filterModal">
                    <div className="container mx-auto px-3">
                        <p>Filters</p>
                        <button onClick={filterModalHandler}>
                            Close Filters
                        </button>
                    </div>
                </div>
            </div>
            <div className="fixed bottom-0 w-full container mx-auto px-3 py-3 z-10 bg-black">
                <div className="flex gap-5">
                    <button
                        onClick={filterModalHandler}
                        className="flex-grow-[7] font-[700] text-white border-[1px] border-white rounded-[35px] py-3 px-10 flex items-center justify-center gap-2"
                    >
                        <LuSlidersHorizontal />
                        Filtruj
                    </button>
                    <button className="flex-grow-[3] font-[700] text-white border-[1px] border-white rounded-[35px]">
                        Sort
                    </button>
                </div>
            </div>
        </>
    );
}

export default FilterModal;
