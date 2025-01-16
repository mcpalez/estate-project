import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { RiMenuLine, RiSearchLine } from "react-icons/ri";
import { Link } from "react-router";
import { useSelector } from "react-redux";

function Header() {
    const favorites = useSelector((state) => state.favorites);

    return (
        <>
            <header className="app-header sticky top-0">
                <div className="bg-themeBlue py-3 text-black">
                    <div className="container mx-auto px-4 font-[900]">
                        <div className="flex items-center justify-between">
                            <div className="logo-app text-white font-[800] text-[30px] lg:text-[35px]">
                                IMMO<span>.</span>
                            </div>
                            <div className="mobile-nav">
                                <div className="nav-el flex items-center justify-center gap-3">
                                    <Link to="/ulubione">
                                        {favorites.length > 0 ? (
                                            <div className="relative">
                                                <AiFillHeart className="text-white text-[27px]" />
                                                <span className="favorites-counter absolute top-0 left-[-5px] bg-blue-700 text-white p-1 rounded-[10px] w-[16px] h-[16px] flex justify-center items-center text-[10px] font-[700]">
                                                    {favorites.length}
                                                </span>
                                            </div>
                                        ) : (
                                            <AiOutlineHeart className="text-white text-[27px]" />
                                        )}
                                    </Link>
                                    <Link
                                        to="/mieszkania"
                                        className="block md:hidden"
                                    >
                                        <RiSearchLine className="text-white text-[27px]" />
                                    </Link>
                                    <RiMenuLine className="text-white md:hidden text-[27px]" />
                                    <button className="text-[16px] font-[600] bg-customBlue text-white hidden md:flex justify-center items-center gap-2">
                                        <RiSearchLine className="text-white text-[26px]" />
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
