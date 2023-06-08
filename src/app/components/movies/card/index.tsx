'use client'

interface Props {
  movie?: any;
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
        <h3 className="text-xl mt-4 mb-4">{props.movie.name}</h3>
        <p className="text-gray-400">Rotten Tomatoes Score:
          <span>{` `}{parseInt(props.movie.rottenTomatoesScore).toFixed(0) + '%'}</span>
        </p>
        <p className="text-gray-400">Oscars:
          <span>{` `}{props.movie.academyAwardWins}/{props.movie.academyAwardNominations}</span>
        </p>
      </div>
    </div>
  );
}

export default Card