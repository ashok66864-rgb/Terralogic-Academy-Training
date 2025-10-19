import React from "react";

const Button = (props: { name: string }) => {
  const { name } = props;
  return (
    <div>
      <button
        style={{
          backgroundColor: "#377245ff", // a nice blue shade
          color: "#f7f4f4ff",
          padding: "10px 20px",
          marginLeft: "12px",
          marginBottom: "16px",
          border: "none",
          borderRadius: "8px",
          fontSize: "16px",
        }}
        className=""
      >
        {name}
      </button>
    </div>
  );
}
export default Button
