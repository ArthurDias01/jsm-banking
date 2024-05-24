import {
  createLinkToken,
  exchangePublicToken,
} from "@/lib/actions/user.actions";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import {
  PlaidLinkOnSuccess,
  PlaidLinkOptions,
  usePlaidLink,
} from "react-plaid-link";
import { Button } from "./ui/button";

const PlaidLink = ({ user, dwollaCustomerId, variant }: PlaidLinkProps) => {
  const router = useRouter();
  const [token, setToken] = useState("");
  const onSuccess = useCallback<PlaidLinkOnSuccess>(
    async (publicToken: string) => {
      await exchangePublicToken({ publicToken, user });
      router.push("/");
    },
    [user, router]
  );
  const config: PlaidLinkOptions = {
    token,
    onSuccess,
  };

  useEffect(() => {
    const getLinkToken = async () => {
      const data = await createLinkToken(user);
      setToken(data?.linkToken);
    };

    getLinkToken();
  }, [user]);

  const { open, ready, error } = usePlaidLink(config);

  useEffect(() => {
    if (error) {
      console.error("Error: ", error);
    }
  }, [error]);

  return (
    <>
      {variant === "primary" ? (
        <Button
          className="plaidlink-primary"
          onClick={() => open()}
          disabled={!ready}
        >
          Connect Bank
        </Button>
      ) : variant === "ghost" ? (
        <Button>Connect Bank</Button>
      ) : (
        <Button>Connect Bank</Button>
      )}
    </>
  );
};

export default PlaidLink;
