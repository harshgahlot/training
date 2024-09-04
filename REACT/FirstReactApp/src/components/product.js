import products from '../assets/products.json';

function Products() {
    
    return ( 
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>PRICE</th>
                        <th>RATING</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(item=>(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.rating}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            {/* <ul>
                {
                    myarray.map(item=>(
                        <li key={item.id}></li>,
                        <li key={item.name}></li>,
                        <li key={item.price}></li>,
                        <li key={item.rating}></li>
                    ))
                }
            </ul> */}
        </div>
     );
}

export default Products;