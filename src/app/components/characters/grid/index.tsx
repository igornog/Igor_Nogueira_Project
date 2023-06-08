import { Pagination, Stack } from "@mui/material";
import Card from "../card";

interface GridProps {
  data?: any[];
}

const Grid: React.FunctionComponent<GridProps> = (
  props: GridProps) => {
  return (
    <div className="grid gap-2 m-16 mt-8 sm:grid-cols-2 lg:grid-cols-3 min-h-[50vh]">
      {props.data?.map((character: any, key: any) => (
        <Card character={character} key={key}/>
      ))
      }
    </div>
  );
}

export default Grid