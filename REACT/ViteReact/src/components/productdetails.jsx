function Productdetails({product}) {
    return ( 
        <div>
            <h3>Product Detail: {product.id}</h3>
            <h4>Name: {product.name}</h4>
            <h4>Price: {product.price}</h4>
        </div>
     );
}

export default Productdetails;