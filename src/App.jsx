import { Layout } from "./components";
import { HomePage, ProductPage, AboutPage } from "./pages";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
