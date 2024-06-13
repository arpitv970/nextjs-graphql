import { Link as LinkIcon } from "lucide-react";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex justify-center items-center mx-auto my-5">
      <div className="flex justify-between items-center mx-0 w-3/4 rounded-lg">
        <Link href={"/"} className="bg-blue-500 p-3 rounded-full">
          <LinkIcon />
        </Link>
        <nav>
          <Link href="/about">About</Link>
          {/* <Link href={`/api/auth/${user ? 'logout' : 'login'}`}>{user ? 'LogOut' : 'LogIn'}</Link> */}
        </nav>
      </div>
    </header>
  );
};
