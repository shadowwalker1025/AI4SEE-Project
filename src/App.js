import Banner from "./Screens/Banner";
import Details from "./Screens/Details";
import Form from "./Screens/Form";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaymentForm from "./Screens/PaymentForm";
import Parth from "./Screens/parth/Parth";
import Features from "./Screens/parth/Features";
import About from "./Screens/parth/About";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Parth />}></Route> */}
          <Route path="/link" element={<About />}></Route>
          <Route path="/" element={<Banner />}></Route>
          <Route path="/about" element={<Details />}></Route>
          <Route path="/about/Form" element={<Form />}></Route>
          <Route path="/customer/payment" element={<PaymentForm />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
