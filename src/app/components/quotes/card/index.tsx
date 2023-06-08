'use client'

import Link from "next/link";

interface Props {
  quote?: any;
  key?: number
}

const Card: React.FunctionComponent<Props> = (
  props: Props) => {
  return (
    <div
      className="max-w-md mt-4 duration-300 border rounded-md shadow-sm hover:shadow-lg"
      key={props.key}
    >
      <div className="pt-3 mb-3 ml-4 mr-2 flex flex-col">
        <h3 className="text-xl">{`"`}{props.quote.dialog}{`"`}</h3>
      </div>
    </div>
  );
}

export default Card