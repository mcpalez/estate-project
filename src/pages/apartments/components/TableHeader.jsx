function ApartmentsTableHeader() {
    return (
        <section className="apartments-header container mx-auto px-4 pt-5 bg-white">
            <div className="flex items-center w-full text-[13px] text-black">
                <div className="listableHeader flex-none p-[6px] pl-0 w-[150px] xl:w-[300px] pb-3 hidden md:block">
                    Inwestycja
                </div>
                <div className="listableHeader flex-none p-[6px] pl-0 w-[150px] xl:w-[250px] pb-3">
                    Numer
                </div>
                <div className="listableRooms flex-none w-[60px] lg:w-[80px] p-[6px] text-center pb-3 hidden md:block">
                    Piętro
                </div>
                <div className="listableRooms flex-none w-[60px] lg:w-[80px] p-[6px] text-center pb-3">
                    Pokoje
                </div>
                <div className="listableArea flex-none p-[6px] w-[80px] md:w-[100px] xl:w-[150px] text-right pb-3">
                    Metraz
                </div>
                <div className="listableArea flex-none p-[6px] w-[150px] text-center pb-3 hidden md:block">
                    Balkon
                </div>
                <div className="listableArea flex-none p-[6px] w-[150px] text-center pb-3 hidden lg:block">
                    Cena
                </div>
                <div className="listableSave p-[6px] pr-0 w-[80px] flex-grow text-right pb-3">
                    Opcje
                </div>
            </div>
        </section>
    );
}

export default ApartmentsTableHeader;
