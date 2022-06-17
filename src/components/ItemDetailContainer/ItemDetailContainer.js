import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import db from "../../utils/firebaseConfig";
import ItemDetail from "./components/ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setProduct({});
    getData().then((products) => {
      const findProduct = products.find((item) => item.id === id);
      findProduct ? setProduct(findProduct) : navigate("/404");
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

  return !loading && <ItemDetail product={product} />;
};

export default ItemDetailContainer;
