import { Link } from "react-router-dom";
import { ShoppingCart } from "@phosphor-icons/react";

const NavBar = () => {
    return (
        <div className="flex justify-center items-center gap-4">
            <Link to={'/'}>Shop</Link>
            <Link to={'/cart'}><ShoppingCart size={32}/></Link>
        </div>
    );
};

export default NavBar;
