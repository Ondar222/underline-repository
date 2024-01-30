import PostCard from "@/components/Post/Card";
import MainLayout from "@/layouts";
import { Col, Row, Space } from "antd";
import { observer } from "mobx-react-lite";

const News = observer(() => {
  return (
    <MainLayout>
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </MainLayout>
  );
});

export default News;
