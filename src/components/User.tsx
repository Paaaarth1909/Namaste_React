import { useEffect, useState } from "react";

const User = ({ name }: { name: string }) => {
  const [count] = useState(0);
  const [count2] = useState(1);

  useEffect(() => {
    // API calls here
  }, []);

  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
      <h1>Count2 = {count2}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: Gurugram</h3>
      <h4>Contact: @parthsaarthie19</h4>
    </div>
  );
};

export default User;
