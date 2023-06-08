'use client'

import Card from "../card";

interface GridProps {
  data?: any[];
}

const Grid: React.FunctionComponent<GridProps> = (
  props: GridProps) => {
  return (
    <div className="grid gap-2 m-16 mt-8 sm:grid-cols-2 lg:grid-cols-4 min-h-[50vh]">
      {props.data?.map((movie: any, key: any) => (
        <Card movie={movie} key={key}/>
      ))
      }
    </div>
  );
}

export default Grid