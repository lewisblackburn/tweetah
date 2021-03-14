import { Story } from "@storybook/react";
import React from "react";
import { Feed } from "../ui/Feed";
import { Layout } from "../ui/Layout";

export default {
  title: "Layout",
};

const TheLayout: Story = () => {
  return (
    <Layout>
      <Feed
        tweets={[]}
        emptyPlaceholder={<p className="mx-32">nothing to see here</p>}
      />
    </Layout>
  );
};

export const Main = TheLayout.bind({});
