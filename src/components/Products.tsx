import { useEffect, useRef, useState } from "react";
import { getAllProductsCall, updateProduct } from "../features/productsSlice";
import { RootState, useAppDispatch } from "../features/store";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import EditIcon from "./EditIcon";

const Card = ({ id, title, price, category, description, image }: IProduct) => {
  const [isEdit, setIsEdit] = useState(false);
  const titleRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const onsubmit = () => {
    const value = titleRef.current?.value;
    dispatch(updateProduct({ id, title: value!, price, category, description, image }));
    setIsEdit(false);
  };
  const cardStyle = {
    border: "1px solid #ccc",
    textAlign: "start" as const,
    borderRadius: "8px",
    padding: "16px",
    maxWidth: "300px",
    margin: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
  };

  const imageStyle = {
    width: "100%",
    borderRadius: "8px 8px 0 0",
    objectFit: "cover" as const,
  };

  const titleStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    margin: "10px 0",
  };

  const priceStyle = {
    fontSize: "18px",
    color: "#28a745",
    margin: "10px 0",
  };

  const categoryStyle = {
    fontSize: "14px",
    color: "#777",
    margin: "10px 0",
  };

  const descriptionStyle = {
    fontSize: "16px",
    color: "#ccc",
    margin: "10px 0",
  };

  return (
    <div style={cardStyle}>
      <img src={image} alt={title} style={imageStyle} />
      <div style={titleStyle}>
        {isEdit ? (
          <input
            ref={titleRef}
            defaultValue={title}
            type="text"
            style={{
              padding: "8px",
              fontSize: "16px",
              color: "#ccc",
              backgroundColor: "#000",
              border: "1px solid rgb(66 66 66)",
              borderRadius: "4px",
              outline: "none",
              width: "80%",
            }}
          />
        ) : (
          title
        )}
        <span
          style={{ marginLeft: "5px", cursor: "pointer" }}
          onClick={() => setIsEdit((prev) => !prev)}
        >
          {isEdit ? "x" : <EditIcon width={16} height={16} style={{ fill: "currentcolor" }} />}
        </span>
      </div>
      <div style={priceStyle}>${price.toFixed(2)}</div>
      <div style={categoryStyle}>{category}</div>
      <div style={descriptionStyle}>{description}</div>
      {isEdit && (
        <button
          onClick={onsubmit}
          type="submit"
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            color: "#fff",
            backgroundColor: "#007BFF",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            outline: "none",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#007BFF")}
        >
          Submit
        </button>
      )}
    </div>
  );
};

export function Component() {
  const dispatch = useAppDispatch();
  const products = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(getAllProductsCall());
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <Link to="/about">Abouts</Link>
      {products?.map((product) => {
        return (
          <div key={product.id}>
            <Card {...product} />
          </div>
        );
      })}
    </div>
  );
}

Component.displayName = "Products";
