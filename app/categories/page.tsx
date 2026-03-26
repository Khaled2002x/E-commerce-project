"use client";
import { useSession } from "next-auth/react";

export default function Categories() {
  const data = useSession();
  console.log(data);

  return (
    <>
      <div className="pt-10 text-center">Categories</div>
    </>
  );
}
