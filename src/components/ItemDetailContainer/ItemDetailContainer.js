import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { data } from "../../utils/data";
import ItemDetail from "./components/ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (findProduct === undefined) {
      navigate("/404");
    } else {
      setProduct(findProduct);
    }
  }, [id]); // eslint-disable-line

  const findProduct = data.find((product) => {
    return product.id == id; // eslint-disable-line
  });

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
