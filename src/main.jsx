import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import AppRouter from "./routes.jsx";
import AuthLoader from "./components/AuthLoader.jsx";
import Layout from "./components/Layout.jsx";
import "./styles/index.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AuthLoader />
        <Layout>
          <AppRouter />
        </Layout>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);