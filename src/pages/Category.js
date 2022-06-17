import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemListContainer/components/ItemList";
import Spinner from "../components/Spinner/Spinner";
import db from "../utils/firebaseConfig";

const Category = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    setProducts([]);
    setLoading(true);
    getData().then((response) => {
      filterByCategory(response);
    });
  }, [category]); // eslint-disable-line

  const getData = async () => {
    const productSnapshot = await getDocs(collection(db, "productos"));
    const productList = productSnapshot.docs.map((doc) => {
      const product = doc.data();
      product.id = doc.id;
      return product;
    });
    return productList;
  };

  const filterByCategory = (product) => {
    return product.map((item) => {
      if (item.category === category) {
        setLoading(false);
        return setProducts((products) => [...products, item]);
      } else {
        return null;
      }
    });
  };

  return (
    <>
      {loading && <Spinner />}
      {!loading && <ItemList products={products} />}
    </>
  );
};

export default Category;
