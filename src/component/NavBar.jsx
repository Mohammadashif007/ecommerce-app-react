import { Link } from "react-router-dom";
import { ShoppingCart, Snowflake } from "@phosphor-icons/react";

const NavBar = () => {
    return (
        <div className="flex justify-between items-center gap-4 text-[#fff] bg-[#003049] p-8">
            <div>
                <Link to={"/"}>
                    <Snowflake size={40} />
                </Link>
            </div>
            <div className="flex items-center gap-5">
                <Link to={"/"}>Shop</Link>
                <Link to={"/cart"}>
                    <ShoppingCart size={32} />
                </Link>
            </div>
        </div>
    );
};

export default NavBar;
