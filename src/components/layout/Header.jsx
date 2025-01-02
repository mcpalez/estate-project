import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router";
import { useSelector } from "react-redux";

function Header() {
    const favorites = useSelector((state) => state.favorites);

    return (
        <>
            <header className="app-header">
                <div className="bg-white py-2 text-black fixed w-full">
                    <div className="container mx-auto px-3 font-[900] text-[32px]">
                        <div className="flex items-center justify-between">
                            <div className="logo-app text-[#242958]">IMMO</div>
                            <div className="mobile-nav">
                                <div className="nav-el">
                                    <Link to="/ulubione">
                                        {favorites.length > 0 ? (
                                            <div className="relative">
                                                <AiFillHeart className="text-[#242958]" />
                                                <span className="favorites-counter absolute top-0 left-[-5px] bg-[#ffe481] text-[#242958] p-1 rounded-[10px] w-[17px] h-[17px] flex justify-center items-center text-[10px]">
                                                    {favorites.length}
                                                </span>
                                            </div>
                                        ) : (
                                            <AiOutlineHeart className="text-gray-300" />
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
