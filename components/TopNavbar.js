import Link from "next/link";
import { useRouter } from "next/router";
import { MdSpaceDashboard } from "react-icons/md";
import {
  ShoppingCartIcon,
  InboxIcon,
  BellAlertIcon,
} from "@heroicons/react/24/solid";

const TopNavbar = () => {
  const router = useRouter();
  return (
    <div className="md:hidden bg-purple w-full p-2">
      <div className=" flex flex-row justify-between">
        <img src="images/logo.svg" alt="hero" loading="lazy" className="h-7" />

        <ul className="  text-grey flex flex-row items-center space-x-3">
          <li className={router.pathname == "/" || "/bar" ? "active" : ""}>
            <MdSpaceDashboard />
            <Link href="/">
              <a></a>
            </Link>
          </li>
          <li className={router.pathname == "/finances" ? "active" : ""}>
            <ShoppingCartIcon className="h-5" />
            <Link href="/finances">
              <a></a>
            </Link>
          </li>
          <li>
            <InboxIcon className="h-5" />
            <Link href="/">
              <a></a>
            </Link>
          </li>
          <li>
            <BellAlertIcon className="h-5" />
            <Link href="/">
              <a></a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopNavbar;
