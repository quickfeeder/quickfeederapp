// pages/dashboard.tsx

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import React from "react";
import { withServerSideAuth } from "@clerk/nextjs/ssr";

export default function DashboardPage() {
  return (
    <div className="p-8">
      <SignedIn>
        <h1 className="text-2xl font-bold">Welcome to your dashboard!</h1>
        <UserButton />
        {/* Your protected content */}
      </SignedIn>
      <SignedOut>
        <p>Please <a href="/login" className="text-blue-600">sign in</a> to continue.</p>
      </SignedOut>
    </div>
  );
}

// This runs on each request and redirects to /login if not signed in
export const getServerSideProps = withServerSideAuth();
