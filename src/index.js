import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// import App from "./Challgend";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terable", "Bad", "OK", "Good", "Amazing"]}
    /> */}
    {/* <StarRating
      size={24}
      color="red"
      maxRating={24}
      clasName="test"
      defultRatting={3}
    /> */}
  </React.StrictMode>
);
