"use client"

import { CaretRight, House } from "@phosphor-icons/react";
import { usePathname } from "next/navigation";

export function Navigation (){
  const pathname = usePathname();

  const arrayPathname = pathname.split("/");

  arrayPathname.splice(0, 1);
  
  return (
    <div className="flex gap-2 items-center leading-3 text-sm text-zinc-700 mb-6">
      <House size={24}/>
      <CaretRight className="text-zinc-400" size={16} weight={"bold"}/>
      <span>Dashboard</span>
      {
        arrayPathname.map((item, index) => {
          return (
            <div className="flex items-center gap-2" key={index}>
              <CaretRight className="text-zinc-400" size={16} weight={"bold"}/>
              <span>{item}</span>
            </div>
          )
        })
      }
    </div>
    
  )
}