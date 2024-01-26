"use client";

import { BuiltInProviderType } from "next-auth/providers/index";
import {
  ClientSafeProvider,
  LiteralUnion,
  getProviders,
  signIn,
} from "next-auth/react";
import { useEffect, useState } from "react";

function SignInButton() {
  const [providers, setProviders] = useState<Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null>(null);

  useEffect(() => {
    getProviders().then((res) => setProviders(res));
  }, []);

  return (
    providers &&
      Object.values(providers).map((provider) => (
        <button
          key={provider.id}
          className="normalBtn"
          onClick={() => signIn(provider.id)}
        >
          Sign In
        </button>
      ))
  )
}

export default SignInButton;
