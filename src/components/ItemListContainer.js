import "./ItemListContainer.css";
import { getProducts } from "./functions";
import { useEffect, useState } from "react";
import Item from "./Item";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  let { categoryId } = useParams();

  useEffect(() => {
    getProducts(categoryId).then((products) => {
      setProducts(products);
    });
  }, [categoryId]);

  return (
    <>
      <h2>{greeting}</h2>
      <div className="list-container">
        {products.map((product) => {
          return <Item key={product.id} product={product} />;
        })}
      </div>
    </>
  );
};

export default ItemListContainer;
