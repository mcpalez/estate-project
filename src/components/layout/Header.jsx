import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router";
import { useSelector } from "react-redux";

function Header() {
    const favorites = useSelector((state) => state.favorites);

    return (
        <>
            <header className="app-header">
                <div className="bg-white py-2 text-black">
                    <div className="container mx-auto px-3 font-[900] text-[32px]">
                        <div className="flex items-center justify-between">
                            <div className="logo-app text-black">IMMO</div>
                            <div className="mobile-nav">
                                <div className="nav-el">
                                    <Link to="/ulubione">
                                        {favorites.length > 0 ? (
                                            <div className="relative">
                                                <AiFillHeart className="text-black" />
                                                <span className="favorites-counter absolute top-0 left-[-5px] bg-[#ff385c] text-white p-1 rounded-[10px] w-[17px] h-[17px] flex justify-center items-center text-[10px]">
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
