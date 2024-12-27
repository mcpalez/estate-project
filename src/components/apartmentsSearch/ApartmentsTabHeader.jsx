function ApartmentsTableHeader() {
    return (
        <section className="apartment-listable container mx-auto px-3 pt-5">
            <div className="flex items-center w-full text-[13px] text-[#00326f]">
                <div className="listableHeader flex-none p-[6px] pl-0 w-[150px] pb-3">
                    Numer
                </div>
                <div className="listableRooms flex-none w-[60px] p-[6px] text-center pb-3">
                    Pokoje
                </div>
                <div className="listableArea flex-none p-[6px] w-[100px] text-right pb-3">
                    Metraz
                </div>
                <div className="listableSave p-[6px] pr-0 w-[80px] flex-grow text-right pb-3">
                    Add
                </div>
            </div>
        </section>
    );
}

export default ApartmentsTableHeader;
