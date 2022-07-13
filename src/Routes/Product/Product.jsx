import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Button from "../../Components/Button/Button";
import WideCard from "../../Components/wideCard/WideCard";
import { getProduct } from "../../Middleware/helperApi";
import loaderGif from "./../../assets/loader.gif";

export default function Product(props) {
  //fetching product id
  let { id } = useParams();

  //creating state for product
  const [productData, setProductData] = useState([]);

  //loading product from server
  const loadproduct = () => {
    getProduct(id).then((data) => {
      if (data.error) {
      } else {
        setProductData(data);
      }
    });
  };

  //calling server api fucnction onload
  useEffect(() => {
    loadproduct();
  });

  return (
    <main style={{ padding: "1rem 0" }}>
      <Button link="/products" data="← back" />
      <div className="wrap">
        {Array.isArray(productData) ? (
          <img src={loaderGif} alt="products loading..." />
        ) : (
          <WideCard data={productData} />
        )}
      </div>
    </main>
  );
}
