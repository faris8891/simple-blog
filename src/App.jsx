import { Routes, Route } from "react-router-dom";
// import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import CreateBlog from "./Components/CreateBlog";
import "./App.css";
import Blogs from "./Components/Blogs";
import BlogContent from "./Components/BlogContent";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Blogs />} />
          <Route path="blogs" element={<Blogs />}></Route>

          <Route  path="blog/:blogId" element={<BlogContent />} />

          <Route path="create-blog" element={<CreateBlog />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
