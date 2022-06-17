import react, { useEffect, useState } from "react";
import ItemList from "./components/ItemList";
import { data } from "../../utils/data";
import Spinner from "../Spinner/Spinner";
import { collection, getDocs } from "firebase/firestore";
import db from "../../utils/firebaseConfig";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setProducts([]);
    getData().then((products) => {
      console.log("products", products);
      setProducts(products);
      setLoading(false);
    });
  }, []); // eslint-disable-line

  const getData = async () => {
    const productSnapshot = await getDocs(collection(db, "productos"));
    const productList = productSnapshot.docs.map((doc) => {
      const product = doc.data();
      product.id = doc.id;
      return product;
    });
    return productList;
  };

  return (
    <>
      {loading && <Spinner />}
      {error && <p>{error}</p>}
      {!loading && !error && <ItemList products={products} />}
    </>
  );
};

export default ItemListContainer;
