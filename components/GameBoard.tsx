import React from "react";
import {
  useBoardView,
  usePushTurn,
  useSelfPlayer,
  useLastHint,
} from "../hooks/game";
import { ICardView } from "../lib/game";
import Card from "./Card";

export default () => {
  const selfPlayer = useSelfPlayer();
  const boardView = useBoardView();
  const pushTurn = usePushTurn();
  const lastHint = useLastHint();
  return (
    <div>
      <div className="grid grid-cols-5 md:gap-2 gap-1 max-w-4xl mx-auto">
        {boardView.map((w: ICardView, i: number) => {
          return (
            <Card
              pushTurn={pushTurn}
              selfPlayer={selfPlayer}
              cardView={w}
              index={i}
              key={i}
            />
          );
        })}
      </div>
      <div className="h-6 p-2 text-center font-bold">
        {lastHint && lastHint.hint}
      </div>
    </div>
  );
};
