import React from "react";
import LoginSelector from "@calimero-is-near/calimero-p2p-sdk/lib/wallets/LoginSelector";
import { useNavigate } from "react-router-dom";
import ContentWrapper from "../components/login/ContentWrapper";

export default function Authenticate() {
  const navigate = useNavigate();
  return (
    <ContentWrapper>
      <LoginSelector
        navigateMetamaskLogin={() => navigate("/auth/metamask")}
        navigateNearLogin={() => navigate("/auth/near")}
        cardBackgroundColor={undefined}
      />
    </ContentWrapper>
  );
}
