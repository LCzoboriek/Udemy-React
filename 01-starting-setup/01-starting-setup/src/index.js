import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
// App in the end is a component
const root = ReactDOM.createRoot(document.getElementById("root")); // This is where the app component is first being used, where its rendering the app inside the div
root.render(<App />);
//
