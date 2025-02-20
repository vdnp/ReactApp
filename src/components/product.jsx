export default function Product({ productObj }) {
  /**
    const imgURL = "/img/1.jpg";
    const title = "Iphone 16";
    const description = "Lorem ipsum dolor sit amet.";
    const price = 80000;
   */
  if (!productObj.is_active) return null;
  return (
    <div className="card shadow-md">
      <img
        className="card-img-top p-2 p-md-3 border-bottom"
        src={productObj.image}
        alt=""
      />
      <div className="card-body">
        <h2 className="card-title">{productObj.title}</h2>
        <p className="card-text">{productObj.description}</p>
        <span
          // className={`f20 ${productObj.price < 100000 ? " discount" : "price"}`} // f20 üzerine price-discount
          // className={productObj.price < 100000 ? "f20 discount" : "f20 price"} //discount üzerine yazdırma
          className="badge text-bg-success"
        >
          {productObj.price} TL
        </span>
      </div>
    </div>
  );
}
