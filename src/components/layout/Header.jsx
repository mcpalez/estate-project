import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router";
import { useSelector } from "react-redux";

function Header() {
    const favorites = useSelector((state) => state.favorites);

    return (
        <>
            <header className="app-header sticky top-0">
                <div className="bg-[#061ab1] py-2 text-black">
                    <div className="container mx-auto px-3 font-[900] text-[35px]">
                        <div className="flex items-center justify-between">
                            <div className="logo-app text-white">
                                IMMO<span className="text-[#ffd100]">.</span>
                            </div>
                            <div className="mobile-nav">
                                <div className="nav-el">
                                    <Link to="/ulubione">
                                        {favorites.length > 0 ? (
                                            <div className="relative">
                                                <AiFillHeart className="text-white" />
                                                <span className="favorites-counter absolute top-0 left-[-5px] bg-[#ffd100] text-[#242958] p-1 rounded-[10px] w-[17px] h-[17px] flex justify-center items-center text-[10px]">
                                                    {favorites.length}
                                                </span>
                                            </div>
                                        ) : (
                                            <AiOutlineHeart className="text-white" />
                                        )}
                                    </Link>
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
