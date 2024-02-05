import { Chart } from "@/components/chart";
import { Grid } from "../../components/grid/grid";


export default function Finance() {

  const data = {
    content: [

    ],
    columns: [
      { title: "Invoke" },
      { title: "Data" },
      { title: "Status" },
      { title: "Customer" },
      { title: "Purchase" },
    ]
  }


  return (
    <div className="flex flex-col gap-4">
      <Grid columns={data.columns} />
      <Chart />
    </div>
  )
}