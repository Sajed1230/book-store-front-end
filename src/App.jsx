import { Route, Routes } from "react-router-dom";
import Loyout from "../loyout";
import Home from "./Pages/home";
import About from "./Pages/about";
import BooksSection from "./Pages/PopularBooks";
import GetInTouch from "./Pages/contact";
import BookDetails from "./Pages/bookdetils";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />

      <Routes>
        <Route path="/" element={<Loyout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="popularbooks" element={<BooksSection />} />
          <Route path="getintouch" element={<GetInTouch />} />
          <Route path="bookdetails/:id" element={<BookDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
