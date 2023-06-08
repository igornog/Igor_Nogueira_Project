'use client'

import Link from "next/link";

interface Props {
  character?: any;
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
        <h3 className="text-xl mt-4">{props.character.name}</h3>
        <p className="text-sm">{props.character.race}</p>
        <Link href={props.character.wikiUrl} className="text-sm w-[fit-content] mt-8 duration-300 hover:underline">
          See more
        </Link>
      </div>
    </div>
  );
}

export default Card