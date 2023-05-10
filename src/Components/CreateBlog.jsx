import { useContext } from "react";
import { BlogContext } from "./Home";

function createNewBlog(blogTitle, blogContent) {
  const newBlog = {
    id: Date.now(),
    blogTitle: blogTitle,
    blogContent: blogContent,
  };
  return newBlog;
}

export default function CreateBlog() {
  const {blogs,setBlogs} = useContext(BlogContext);



  const submitHandler = (event) => {
    event.preventDefault();
    const blogTitle = event.target.blogTitle.value;
    const blogContent = event.target.blogContent.value;
    event.target.blogTitle.value = "";
    event.target.blogContent.value = "";
    setBlogs([...blogs, createNewBlog(blogTitle, blogContent)]);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" name="blogTitle" required />
        <textarea name="blogContent" cols="30" rows="10" required></textarea>
        <button type="submit">Create Blog</button>
      </form>
    </div>
  );
}
