import { appleProducts as products } from "../../products";
import Product from "./Product";

const Shop = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl  font-bold py-16">Apple Gadgets Shop</h1>
            <div className="grid gap-8 items-center lg:grid-cols-3 md:grid-cols-2">
                {products.map((product) => (
                    <Product key={product.id} product={product}></Product>
                ))}
            </div>
        </div>
    );
};

export default Shop;
