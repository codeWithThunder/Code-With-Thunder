import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import logo from "../../Image/logo/logo2.jpg";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };

  return (
    <div className="">
      <div className="min-h-full ">
        <Disclosure as="nav" className=" w-[100%] fixed">
          {({ open }) => (
            <>
              <div className=" bg-[#EDF2F7]  ">
                <div className="flex items-center max-w-7xl h-16 mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex items-center w-[100%] justify-between">
                    <Link to={"/"} className="flex-shrink-0 flex items-center">
                      <img
                        className="cursor-pointer h-8 w-8 rounded-[25px]"
                        src={logo}
                        alt="Workflow"
                      />
                      <p className="cursor-pointer pl-[5px] font-[600] text-[15px]">
                        CodeWithThunder
                      </p>
                    </Link>
                    <div className="hidden md:flex">
                      <div className="ml-10 flex items-baseline space-x-4">
                        <Link
                          to={"/"}
                          className="text-black cursor-pointer px-3 py-2 rounded-md text-sm font-medium"
                        >
                          Home
                        </Link>
                        <Link
                          to={"/tailwinduiux/header1"}
                          className="text-black cursor-pointer px-3 py-2 rounded-md text-sm font-medium"
                        >
                          TailwindUiUx
                        </Link>
                        <Link
                          to={"/about"}
                          className="text-black cursor-pointer px-3 py-2 rounded-md text-sm font-medium"
                        >
                          About
                        </Link>
                        <Link
                          to={"/blog"}
                          className="text-black cursor-pointer px-3 py-2 rounded-md text-sm font-medium"
                        >
                          Blog
                        </Link>
                        <Link
                          to={"/contact"}
                          className="text-black cursor-pointer px-3 py-2 rounded-md text-sm font-medium"
                        >
                          Contact
                        </Link>
                      </div>
                    </div>
                    <div className="hidden md:flex">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {user ? (
                          <Link to={"/login"}>
                            <button
                              onClick={logout}
                              className="px-3 py-2 lg:px-4 lg:py-3 bg-gray-900 text-gray-200 text-xs font-[600] rounded hover:text-white hover:bg-gray-800"
                            >
                              LogOut
                            </button>
                          </Link>
                        ) : (
                          <Link to={"/login"}>
                            <button className="px-3 py-2 lg:px-4 lg:py-3 bg-gray-900 text-gray-200 text-xs font-[600] rounded hover:text-white hover:bg-gray-800">
                              LogIn
                            </button>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 focus:outline-none">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden bg-transparent justify-end flex">
                <div className="px-[1.8rem] pt-2 pb-3 mr-[30px] text-right w-[11rem] bg-[#EDF2F7] space-y-1 sm:px-[3]">
                  <Link
                    to={"/"}
                    className="text-black block cursor-pointer px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </Link>
                  <Link
                    to={"/tailwinduiux/header1"}
                    className="text-black block cursor-pointer px-3 py-2 rounded-md text-sm font-medium"
                  >
                    TailwindUiUx
                  </Link>
                  <Link
                    to={"/about"}
                    className="text-black block cursor-pointer px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About
                  </Link>
                  <Link
                    to={"/blog"}
                    className="text-black block cursor-pointer px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Blog
                  </Link>
                  <Link
                    to={"/contact"}
                    className="text-black block cursor-pointer px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contact
                  </Link>
                  {user ? (
                    <Link to={"/login"}>
                      <button
                        onClick={logout}
                        className="text-black block cursor-pointer px-3 py-2 rounded-md text-sm font-medium"
                      >
                        LogOut
                      </button>
                    </Link>
                  ) : (
                    <Link to={"/login"}>
                      <button className="text-black block text-center cursor-pointer px-3 py-2 rounded-md text-sm font-medium">
                        LogIn
                      </button>
                    </Link>
                  )}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default Navbar;
