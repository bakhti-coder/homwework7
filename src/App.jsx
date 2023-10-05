import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import HomePage from "./pages/HomePage";
import Pizza from "./pages/Pizza";
import PizzaCart from "./pages/PizzaCart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/pizza/:id" element={<Pizza />} />
          <Route path="/cart" element={<PizzaCart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
