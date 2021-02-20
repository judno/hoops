import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUserInfo } from "./api";
import { login } from "./auth";

export function Header() {
  return (
    <div className="bg-gray-800 mb-5">
      <nav className="content flex h-20 items-center justify-between px-5 text-white  mb-8">
        <div className="flex gap-x-10">
          <Link to="/">
            <h1 className="text-xl font-semibold">Hoops!</h1>
          </Link>
          <div className="flex gap-x-6 text-lg">
            <Link to="/add">Add</Link>
          </div>
        </div>
        <UserStatus />
      </nav>
    </div>
  );
}

function UserStatus() {
  const [user, setUser] = useState(null);

  useEffect(async () => {
    const user = await getUserInfo();

    setUser(user);
  }, []);

  if (user) {
    return (
      <div className="flex items-center gap-3">
        <img className="rounded-full" src={user.picture} />
        <div>{user.name}</div>
      </div>
    );
  }

  return (
    <button
      onClick={async () => {
        await login();

        const user = await getUserInfo();

        setUser(user);
      }}
    >
      Login
    </button>
  );
}
