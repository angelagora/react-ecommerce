import react, { useEffect, useState } from "react";
import ItemList from "./components/ItemList";
import { data } from "../../utils/data";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getData = new Promise((resolve, reject) => {
    let condition = true;
    if (condition) {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    } else {
      reject("Error al cargar los productos");
    }
  });

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await getData;
        setProducts(response);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    getProducts();
  }, []); // eslint-disable-line

  return (
    <>
      {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && <ItemList products={products} />}
    </>
  );
};

export default ItemListContainer;
