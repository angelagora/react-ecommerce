import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemListContainer/components/ItemList";
import Spinner from "../components/Spinner/Spinner";
import { data } from "../utils/data";

const Category = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    setProducts([]);
    setLoading(true);
    getProducts().then((response) => {
      filterByCategory(response);
    });
  }, [category]); // eslint-disable-line

  const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });
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
