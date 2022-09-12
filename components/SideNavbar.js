import Link from "next/link";
import { useRouter } from "next/router";
import { MdSpaceDashboard } from "react-icons/md";
import {
  ShoppingCartIcon,
  InboxIcon,
  BellAlertIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/solid";

const SideNavbar = () => {
  const router = useRouter();
  return (
    <div class=" flex flex-row ">
      <div class=" py-10 px-8 bg-purple w-64 h-screen  relative hidden lg:block">
        {/* Logo */}
        <div className="flex flex-row items-center space-x-2">
          <img
            src="images/logo.svg"
            alt="hero"
            loading="lazy"
            className="h-10"
          />
          <h1>Analyze.</h1>
        </div>
        {/* List */}
        <ul className="mt-20 ml-5 space-y-8 text-grey">
          <li className={router.pathname == "/" || "/bar" ? "active" : ""}>
            <MdSpaceDashboard />
            <Link href="/">
              <a>Dashboard</a>
            </Link>
          </li>
          <li className={router.pathname == "/finances" ? "active" : ""}>
            <ShoppingCartIcon className="h-5" />
            <Link href="/finances">
              <a>Products</a>
            </Link>
          </li>
          <li className={router.pathname == "/messages" ? "active" : ""}>
            <InboxIcon className="h-5" />
            <Link href="/messages">
              <a>Messages</a>
            </Link>
          </li>
          <li className={router.pathname == "/alerts" ? "active" : ""}>
            <BellAlertIcon className="h-5" />
            <Link href="/alerts">
              <a>Alerts</a>
            </Link>
          </li>
        </ul>
        <div className="space-y-5 absolute bottom-5 left-12 ">
          <div className="text-grey flex flex-row items-center space-x-2 ">
            <ArrowRightOnRectangleIcon className="h-4 " />
            <li className="text-[15px]">Log out</li>
          </div>
          <h6>© 2022, All Rights Reserved.</h6>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
