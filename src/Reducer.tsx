import React, { useReducer } from "react";

const initialScore = [
  {
    id: 1,
    score: 0,
    name: "John",
  },
  {
    id: 2,
    score: 0,
    name: "Sally",
  },
];

interface Player {
  id: number;
  score: number;
  name: string;
}

interface Action {
  id: number;
  type: string;
}

const reducer = (state: Player[], action: Action) => {
  switch (action.type) {
    case "INCREASE":
      return state.map((player) => {
        if (player.id === action.id) {
          return { ...player, score: player.score + 1 };
        } else {
          return player;
        }
      });

    case "DECREMENT":
      return state.map((player) => {
        if (player.id === action.id) {
          return { ...player, score: player.score - 1 };
        } else {
          return player;
        }
      });

    default:
      return state;
  }
};

const Reducer = () => {
  const [score, dispatch] = useReducer(reducer, initialScore);

  const handleIncrease = (player: Player) => {
    dispatch({ type: "INCREASE", id: player.id });
  };

  const handleDecrement = (player: Player) => {
    dispatch({ type: "DECREMENT", id: player.id });
  };

  return (
    <div>
      {score.map((player) => (
        <div key={player.id}>
          <label>
            <span>{player.name}</span>
            <input
              type="button"
              onClick={() => handleIncrease(player)}
              value={"Tang"}
            />
            {player.score}

            <input
              type="button"
              onClick={() => handleDecrement(player)}
              value={"Giam"}
            />
          </label>
        </div>
      ))}
    </div>
  );
};

export default Reducer;
