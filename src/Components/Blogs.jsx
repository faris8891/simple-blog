import { useContext } from "react";
import { BlogContext } from "./Home";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import BlogContent from "./BlogContent";

export default function Blogs() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { blogs } = useContext(BlogContext);
  const navigate = useNavigate();

  return (
    <div className="blogs">
      {blogs.map((e) => (
        <h1
          key={e.id}
          onClick={() => {
            setSearchParams({ blogId: e.id });
            navigate(`/blog/${e.id}`);
          }}
        >
          {e.blogTitle}
        </h1>
      ))}
    </div>
  );
}
