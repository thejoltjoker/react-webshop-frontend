import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="border-gray-200 bg-white ">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <NavLink to="/" className="flex">
          <span className="whitespace-nowrap text-lg font-semibold uppercase tracking-wider text-gray-900">
            Adventure Apparel
          </span>
        </NavLink>
        <button
          data-collapse-toggle="mega-menu-full"
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden "
          aria-controls="mega-menu-full"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          id="mega-menu-full"
          className="font-regular hidden w-full items-center justify-between text-xs uppercase tracking-widest opacity-60 md:order-1 md:flex md:w-auto"
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse ">
            <li>
              <NavLink
                to="/"
                className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 "
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            {/* <li>
              <button
                id="mega-menu-full-dropdown-button"
                data-collapse-toggle="mega-menu-full-dropdown"
                className="flex w-full items-center justify-between rounded px-3 py-2 uppercase text-gray-900 hover:bg-gray-100 md:w-auto md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-600 "
              >
                Company{" "}
                <svg
                  className="ms-2.5 h-2.5 w-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
            </li> */}
            <li>
              <NavLink
                to="./products"
                className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 "
              >
                Products
              </NavLink>
            </li>

            <li>
              <a
                href="#"
                className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 "
              >
                (0) Cart
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <div
        id="mega-menu-full-dropdown"
        className="mt-1 border-y border-gray-200 bg-gray-50 shadow-sm md:bg-white "
      >
        <div className="mx-auto grid max-w-screen-xl px-4 py-5 text-gray-900 sm:grid-cols-2 md:px-6 ">
          <ul>
            <li>
              <a href="#" className="block rounded-lg p-3 hover:bg-gray-100 ">
                <div className="font-semibold">Online Stores</div>
                <span className="text-sm text-gray-500 ">
                  Connect with third-party tools that you're already using.
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="block rounded-lg p-3 hover:bg-gray-100 ">
                <div className="font-semibold">Segmentation</div>
                <span className="text-sm text-gray-500 ">
                  Connect with third-party tools that you're already using.
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="block rounded-lg p-3 hover:bg-gray-100 ">
                <div className="font-semibold">Marketing CRM</div>
                <span className="text-sm text-gray-500 ">
                  Connect with third-party tools that you're already using.
                </span>
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#" className="block rounded-lg p-3 hover:bg-gray-100 ">
                <div className="font-semibold">Online Stores</div>
                <span className="text-sm text-gray-500 ">
                  Connect with third-party tools that you're already using.
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="block rounded-lg p-3 hover:bg-gray-100 ">
                <div className="font-semibold">Segmentation</div>
                <span className="text-sm text-gray-500 ">
                  Connect with third-party tools that you're already using.
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="block rounded-lg p-3 hover:bg-gray-100 ">
                <div className="font-semibold">Marketing CRM</div>
                <span className="text-sm text-gray-500 ">
                  Connect with third-party tools that you're already using.
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div> */}
    </nav>
  );
};

export default Navbar;
