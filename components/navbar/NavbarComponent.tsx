"use client";

import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { MenuList } from "@/components/navbar/menu";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import "@/app/globals.css";
import { IoCart } from "react-icons/io5";
import { useAppSelector } from "@/lib/hooks";
type MenuItems = {
  title: string;
  path: string;
  active: boolean;
};
export default function NavbarComponent() {
  const [menu, setMenu] = useState<MenuItems[]>(MenuList);
  const count = useAppSelector((state) => state.counter.value);
  const router = useRouter();
  const pathName = usePathname();
  return (
    <Navbar className="bg-secondary">
      <NavbarBrand href="/">
        <img src="../Logo.png" className="mr-3 h-6 sm:h-9" alt="Logo" />
        <div className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          ElyzShopee
        </div>
      </NavbarBrand>
      <div className="flex md:order-2">
        <div>
          <span className="text-xl text-yellow-400 relative top-[-10px] left-8">
            {count}
          </span>
        </div>
        <div>
          <IoCart
            onClick={() => router.push(`/carts`)}
            className="text-5xl mr-2 text-yellow-400"
          />
        </div>
        <div>
          <Link href="#">
              <Button className="bg-primary focus:ring-headerText ring-secondary">
                Login
              </Button>
          </Link>
        </div>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        {menu.map((pro, key) => (
          <NavbarLink
            className="text-gray-900 font-semibold focus:text-yellow-400 focus:underline-offset-2"
            key={key}
            as={Link}
            href={pro.path}
            active={pro.path === pathName}
          >
            {pro.title}
          </NavbarLink>
        ))}
      </NavbarCollapse>
    </Navbar>
  );
}
