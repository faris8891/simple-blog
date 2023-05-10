import { useContext } from "react";
import { useParams } from "react-router-dom";
import { BlogContext } from "./Home";

export default function BlogContent() {
  const params = useParams();
  const blogId = params.blogId;
  const { blogs } = useContext(BlogContext);
  const blog = blogs.filter((e) => e.id == blogId);
  return (
    <div >
      <h1>{blog[0].blogTitle}</h1>
      <p>{blog[0].blogContent}</p>
    </div>
  );
}
