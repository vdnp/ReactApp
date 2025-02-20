import Product from "./product";
import { items } from "../data";

export default function ProductList() {
  return (
    <>
      {/* <h2 className="title">Product List</h2> */}
      {items.length > 0 ? (
        <div
          className="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-4"
          id="product-list"
        >
          {items.map((item, index) => (
            <div className="col" key={index}>
              <Product
                productObj={item}
                // image={item.image}
                // title={item.title}
                // description={item.description}
                // price={item.price}
              />
            </div>
          ))}
        </div>
      ) : (
        <h4>Şu an satışta olan bir ürün bulunmamaktadır.</h4>
      )}
    </>
  );
}
