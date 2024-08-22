import React from "react";
import getData from "@/utils/getData";

async function Users() {
  const data = await getData("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });

  //   console.log('amadanam bahr che bod')
  return (
    <ul>
      {data.map((el, i) => (
        <li key={i}>{el.name}</li>
      ))}
    </ul>
  );
}

export default Users;
