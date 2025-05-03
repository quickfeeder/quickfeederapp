// pages/dashboard.tsx (Pages Router example)

import type { GetServerSideProps } from "next";
import React from "react";
import { getCookie } from "cookies-next";
import jwt from "jsonwebtoken";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const token = getCookie("auth_token", { req, res }) as string | undefined;
  if (!token) {
    return { redirect: { destination: "/login", permanent: false } };
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string };
    // you can pass payload.userId into props or fetch more user data here
    return { props: {} };
  } catch {
    return { redirect: { destination: "/login", permanent: false } };
  }
};

export default function Dashboard() {
  return <div>🔒 Protected Dashboard</div>;
}
