import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import AppRouter from "./routes.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import AuthLoader from "./components/AuthLoader.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AuthLoader />
        <Header />
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
