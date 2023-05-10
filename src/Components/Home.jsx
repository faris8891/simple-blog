import { createContext, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

export const BlogContext = createContext();
export default function Home() {
  const [blogs, setBlogs] = useState([]);
  console.log(blogs);
  return (
    <BlogContext.Provider value={{ blogs, setBlogs }}>
      <div className="navbar">
      <NavLink to="blogs">
        Blogs
      </NavLink>
      <NavLink  to="create-blog">Create Blog</NavLink>
      </div>
      <Outlet />
    </BlogContext.Provider>
  );
}
