import Users from "@/components/Users";
import Counter from "@/components/Counter";
import React from "react";
import { Suspense } from "react";

function page() {
  return (
    <>
      <h1>Our Home Page</h1>
      <h2>Users</h2>
      <Users />
      <br />

      <h1>Counter</h1>
      <Counter>
        <Users />
      </Counter>

      {/* <Suspense fallback={<p>Loading users..</p>}>
        <Users />
      </Suspense> */}
    </>
  );
}

export default page;
