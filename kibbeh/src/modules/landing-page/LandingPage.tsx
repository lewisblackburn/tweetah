import React from "react";
import { apiBaseUrl } from "../../lib/constants";
import { Button } from "../../ui/Button";

interface LandingPageProps {}

export const LandingPage: React.FC<LandingPageProps> = ({}) => {
  return (
    <div>
      <Button
        onClick={() => {
          window.location.href = `${apiBaseUrl}/auth/github/web`;
        }}
      >
        login with GitHub
      </Button>
    </div>
  );
};
