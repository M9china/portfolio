"use client";

import Link from "next/link";
import Image from "next/image";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
// import { NavStatic } from "./NavStatic";

export const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Dialog */}
      <header className=" sm:py-2 px-4 fixed top-0 w-screen sm:w-full
  border-b
  bg-white dark:bg-[#020617]
  border-gray-200 dark:border-gray-800">
        <Dialog
          open={open}
          onClose={setOpen}
          className="relative z-40 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />
          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative flex w-1/2 max-w-xs transform bg-[#001A4B] dark:bg-[#020617]
    text-white dark:text-gray-200 flex-col overflow-y-auto bg-[#001A4B] pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
            >
              <div className="flex px-4 pb-2 pt-5">
                <button
                  aria-label="Close menu"
                  type="button"
                  onClick={() => setOpen(false)}
                  className="relative -m-2 inline-flex items-center justify-center rounded-md p-2"
                >
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>
              {/* <div className="space-y-6 border-t border-white px-4 py-6">
                {NavStatic.map((item, name) => (
                  <Link
                    key={name}
                    href={item.href}
                    className="-m-2 block p-2 font-semibold text-white"
                  >
                    {item.title}
                  </Link>
                ))}
              </div> */}
            </DialogPanel>
          </div>
        </Dialog>

        {/* Nav */}
        <nav aria-label="Top" className="mx-auto max-w-8xl sm:px-6 lg:px-8">
          <div className="flex h-16 items-center">
            {/* Logo */}
            <div className="flex space-x-4 items-center lg:ml-0">
              <Link href="/">
                <Image
                  alt="zembelani logo"
                  height={1500}
                  width={1500}
                  src="/fix.png"
                  className="h-[3.5rem] sm:h-[5rem] rounded-full w-[3.5rem] sm:w-[5rem] object-cover"
                />
              </Link>
            </div>

            <div className="ml-auto mr-4 flex items-center">
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6"></div>

              {/* {NavStatic.map((item, name) => (
                  <Link
                    key={name}
                    href={item.href}
                    className="hover:border-b-1 border-red-700 font-semibold text-[#001A4B]"
                  >
                    {item.title}
                  </Link>
                ))} */}
            </div>
            <div className="flex sm:hidden items-center space-x-4">
              <button
                aria-label="Open menu"
                type="button"
                onClick={() => setOpen(true)}
                className="relative block sm:hidden rounded-md font-semibold lg:hidden"
              >
                <Bars3Icon className="h-7 w-7 text-[#001A4B] dark:text-gray-200" />
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
