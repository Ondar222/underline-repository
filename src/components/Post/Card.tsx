import { Card, Image, Typography } from "antd";

const PostCard = () => {
  return (
    <div className="post__card">
      <Card>
        <div className="post__card__img">
          <Image src="/favicon.ico" />
        </div>
        <Typography.Title
        level={4}
        >
          Заголовок новости
        </Typography.Title>

        <Typography.Text type="secondary">дата</Typography.Text>
      </Card>
    </div>
  );
};

export default PostCard;
