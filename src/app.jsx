import Header from "./components/header";
import ProductList from "./components/productList";
import Footer from "./components/footer";

export default function App() {
  //Root component oluşturarak çıkartmak daha sağlıklı
  return (
    <>
      <Header />
      <div className="container mt-3">
        <ProductList />
        {/* <Footer /> */}
      </div>
    </>
  );
}
