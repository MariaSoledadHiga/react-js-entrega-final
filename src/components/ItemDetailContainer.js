import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { getProductById } from "./functions";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  let { id } = useParams();

  useEffect(() => {
    getProductById(id).then((product) => {
      setProduct(product);
    });
  }, [id]);

  return (
    <>
      <div className="list-container">
        <ItemDetail key={product.id} product={product} />
      </div>
    </>
  );
};

export default ItemDetailContainer;
