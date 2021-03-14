import React from "react";
import { Layout } from "../../ui/Layout";
import { Tweet } from "../../ui/Tweet";
import { useVerifyLoggedIn } from "../auth/useVerifyLoggedIn";

interface LoungePageProps {}

export const LoungePage: React.FC<LoungePageProps> = ({}) => {
  if (!useVerifyLoggedIn()) {
    return null;
  }

  return (
    <Layout>
      <div className="flex-col">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, index) => (
          <ul>
            <li className="border-b border-gray-600">
              <Tweet />
            </li>
          </ul>
        ))}
      </div>
    </Layout>
  );
};
