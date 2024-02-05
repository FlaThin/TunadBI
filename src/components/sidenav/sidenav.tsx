"use client"

import Link from "next/link";
import { Book, Coins, Gear, List, Notification, CellSignalHigh, Pulse } from "@phosphor-icons/react";
import { LinksActive } from "../links-active/links-active";
import Image from "next/image";
import { Notifys } from "../links-active/notifys/notifys";

export function Sidenav() {

  const expand = true;

  return (
    <nav className="flex ">
      <div className={`flex flex-col bg-zinc-800 rounded-md w-[72px] p-4 ${expand ? "rounded-e-none" : ""}`}>
        <div className="flex flex-1 flex-col gap-6 ">
          <LinksActive href="/">
            <List size={24} />
          </LinksActive>
          <LinksActive href="/finance">
            <Coins size={24} />
          </LinksActive>
          <LinksActive href="/study">
            <Book size={24} />
          </LinksActive>
        </div>
        <div className="flex pb-2">
          <button className="p-2 text-zinc-200">
            <Gear size={24} />
          </button>
        </div>
        <div className="flex border-t-[1px] pt-4 ">
          <Image src="/user.png" width={70} height={70} className="w-full rounded-full bg-zinc-300 p-2" alt="User picture" />
        </div>
      </div>

      <div className={`bg-zinc-900 p-3 w-48  ${expand ? "rounded-s-none" : ""}`}>
        <div className="flex flex-col gap-2 text-zinc-200">
          <h3 className="font-bold my-2">
            dashbord
          </h3>
          <Link className="flex gap-2 text-sm items-center rounded-sm hover:bg-zinc-800 pe-1 p-3 py-2 transition-all" href={"/"}>
            <Pulse size={16} />
            <span className="flex-1">Overview</span>
          </Link>
          <Link className="flex gap-2 text-sm items-center rounded-sm hover:bg-zinc-800 pe-1 p-3 py-2 transition-all" href={"/"}>
            <Notification size={16} />
            <span className="flex-1">Notification</span>
            <Notifys>6</Notifys>
          </Link>

          <Link className="flex gap-2 text-sm items-center rounded-sm hover:bg-zinc-800 pe-1 p-3 py-2 transition-all" href={"/"}>
            <CellSignalHigh size={16} />
            <span className="flex-1">Analytics</span>
          </Link>
        </div>
      </div>

    </nav>
  )
}