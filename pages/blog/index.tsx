import type { NextPage } from "next";
import BlogItem from "../../components/blog/BlogItem";

const BlogPage: NextPage = () => {
  return (
    <section className="lg:container px-5 mt-10">
      <div className="py-8 grid gap-y-10 md:px-6">
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
    </section>
  );
};

export default BlogPage;
