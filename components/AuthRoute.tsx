"use client"
import { useSession } from "next-auth/react";
import React from "react";

export default function AuthRoute({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession({
    required: true,
  });
  const loading = status == "loading";
  return <div>{!loading && session ?  children  : null}</div>;
}

