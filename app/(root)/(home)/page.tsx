"use client";
import { UserButton } from "@clerk/clerk-react";

export default function Home() {
  return (
    <div>
      <h1 className='h1-bold'>Home</h1>
      <UserButton afterSignOutUrl='/' />
    </div>
  );
}
