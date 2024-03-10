const Product = ({ product }) => {
    const { productName, image, price, releaseDate } = product;
    return (
        <div className="flex flex-col items-center gap-3">
            <img width="200px" src={image} alt="" />
            <h2 className="text-2xl">{productName}</h2>
            <p>Release : {releaseDate}</p>
            <p className="font-bold text-[18px]">${price}</p>
            <button className="btn btn-primary">Buy</button>
        </div>
    );
};

export default Product;
