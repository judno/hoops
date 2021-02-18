import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="bg-blue-800">
      <nav className="content flex h-20 items-center px-5 text-white gap-x-10 mb-8">
        <h1 className="text-xl font-semibold">Hoops!</h1>
        <div className="flex gap-x-6 text-lg">
          <Link to="/">Home</Link>
        </div>
      </nav>
    </div>
  );
}
