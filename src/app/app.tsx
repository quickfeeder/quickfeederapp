import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  return (
    <ClerkProvider>
      <Component {...pageProps} />
    </ClerkProvider>
  );
}
