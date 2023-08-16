import React from "react";

const containerStyle = {
  position: "relative",
  textAlign: "center",
};

const imageStyle = {
  width: "100%",
  height: "auto",
};

const imageTextStyle = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  color: "white",
  fontWeight: "bold",
  fontSize: "24px",
  padding: "20px",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
};

function Home() {
  return (
    <div style={containerStyle}>
      <img
        src={
          "https://static.vecteezy.com/ti/vecteur-libre/p3/605888-fond-de-theme-chinois-avec-les-batiments-du-temple-gratuit-vectoriel.jpg?fbclid=IwAR3Z7FdUWeDTxUwHCJisF3zSdvBgLpoKvUzNwsiGhQ2s5t4I_QQ0vLdeLr8"
        }
        alt="Home"
        style={imageStyle}
      />
      <div style={imageTextStyle}>
        <h1>Welcome to Asian Paradise</h1>
        <p>
          Asian paradise, is your store to find your authentic flavors of Asia
          .Our store offers a variety of products that capture the true essence
          of Asian cuisine. Explore our selection to indulge in the rich and
          diverse tastes that Asia has to offer.
        </p>
      </div>
    </div>
  );
}

export default Home;
