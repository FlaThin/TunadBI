import { CloudArrowDown } from "@phosphor-icons/react";
import { Button } from "../../button/button";

export function Export() {
  return (
    <div className="flex gap-3">
      <Button title="Download PDF" iconLeft={() => <CloudArrowDown size={24}/>}></Button>
      <Button title="Download CSV " iconLeft={() => <CloudArrowDown size={24}/>}></Button>
    </div>
  )
}