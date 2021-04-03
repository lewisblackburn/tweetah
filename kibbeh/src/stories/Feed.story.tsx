import { Story } from "@storybook/react";
import { Feed, FeedProps } from "../ui/Feed";

export default {
  title: "Feed",
  component: Feed,
};

export const Main: Story<FeedProps> = ({
  tweets = [
    {
      author: {
        displayname: "displayname",
        id: 1,
        username: "username",
      },
      authorId: 1,
      commentAmount: 1,
      id: 1,
      liked: true,
      image: null,
      text: "text",
      likeAmount: 1,
      retweetAmount: 1,
      createdAt: "",
      likes: {},
    },
  ],
}) => <Feed tweets={tweets} />;

Main.bind({});

// export const Empty: Story<FeedProps> = ({
//   title = "Your feed",
//   actionTitle = "New room",
//   onActionClicked = () => null,
//   rooms = [],
//   emptyPlaceholder = (
//     <p className="text-primary-100 justify-center">(nothing to see here)</p>
//   ),
// }) => (
//   <div style={{ width: 640 }}>
//     <Feed
//       title={title}
//       actionTitle={actionTitle}
//       onActionClicked={onActionClicked}
//       rooms={rooms}
//       emptyPlaceholder={emptyPlaceholder}
//     />
//   </div>
// );

// Empty.bind({});
