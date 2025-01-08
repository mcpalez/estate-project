import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { RiMenuLine, RiSearchLine } from "react-icons/ri";
import { Link } from "react-router";
import { useSelector } from "react-redux";

function Header() {
    const favorites = useSelector((state) => state.favorites);

    return (
        <>
            <header className="app-header sticky top-0">
                <div className="bg-white py-3 text-black">
                    <div className="container mx-auto px-3 font-[900] text-[35px]">
                        <div className="flex items-center justify-between">
                            <div className="logo-app text-black">IMMO</div>
                            <div className="mobile-nav">
                                <div className="nav-el flex items-center justify-center gap-3">
                                    <Link to="/ulubione">
                                        {favorites.length > 0 ? (
                                            <div className="relative">
                                                <AiFillHeart className="text-gray-400 text-[32px]" />
                                                <span className="favorites-counter absolute top-0 left-[-5px] bg-slate-600 text-white p-1 rounded-[10px] w-[16px] h-[16px] flex justify-center items-center text-[10px]">
                                                    {favorites.length}
                                                </span>
                                            </div>
                                        ) : (
                                            <AiOutlineHeart className="text-gray-400" />
                                        )}
                                    </Link>
                                    <Link
                                        to="/mieszkania"
                                        className="block md:hidden"
                                    >
                                        <RiSearchLine className="text-gray-400" />
                                    </Link>
                                    <RiMenuLine className="text-gray-400 md:hidden" />
                                    <button className="text-[17px] font-[600] bg-black py-[10px] px-5 text-white hidden md:flex">
                                        <Link to="/mieszkania">
                                            Znajdź mieszkanie
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
