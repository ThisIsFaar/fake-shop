import { Fragment, useEffect, useState } from "react";
import Card from "../../Components/Card/Card";
import { getProducts } from "../../Middleware/helperApi";
import loaderGif from "./../../assets/loader.gif";
import "./Products.css";

export default function Products() {
  //creating state for products and sortType(for tracking current sortTypes)
  const [productsData, setProductsData] = useState([]);
  const [sortType, setSortType] = useState("");

  //loading product from server
  const loadAllproduct = () => {
    getProducts().then((data) => {
      if (data.error) {
      } else {
        setProductsData(data);
      }
    });
  };

  //calling server api fucnction onload
  useEffect(() => {
    console.log("hmm");
    loadAllproduct();
  }, []);

  //sort products on the basis of Price(sortTypes)
  const sortProducts = () => {
    const sorted =
      sortType === "asc" || ""
        ? [...productsData].sort((a, b) => a["price"] - b["price"])
        : [...productsData].sort((a, b) => b["price"] - a["price"]);

    setProductsData(sorted);

    sortType === "asc" ? setSortType("desc") : setSortType("asc");
  };

  return (
    <Fragment>
      <button className="sortButton" onClick={() => sortProducts()}>
        Sort By Price
      </button>
      <div className="wrap">
        {productsData.length > 0 ? (
          productsData.map((p) => {
            return <Card key={p.id} data={p} />;
          })
        ) : (
          <img src={loaderGif} alt="products loading..." />
        )}
      </div>
    </Fragment>
  );
}
