import React from 'react';
import { Store } from '@shared';
import { GameInfo } from 'entities/game';
import { GameSocket } from 'shared/lib/game-socket';
import { StartLayout } from './ui/start-layout';
import { GameStartButton } from 'features/game-start';

type Props = {
  gameModel: Store.RootState;
  userId: number;
  socket: GameSocket;
};
export const GameStartScreen = ({ gameModel, socket, userId }: Props) => {
  const gameInfo = Store.selectGameInfo(gameModel);
  const gameQuestionInfo = Store.selectQuestionInfo(gameModel);
  const playersCount = Store.selectPlayersCount(gameModel);

  return (
    <StartLayout>
      <GameInfo
        time={gameInfo.duration}
        questionsNumber={gameQuestionInfo.questionsNumber}
        difficulty={gameInfo.difficulty}
        name={gameInfo.name}
        startDateTime={gameInfo.startTime}
        usersCount={playersCount}
        tags={gameInfo.tags}
        actions={
          <GameStartButton
            gameModel={gameModel}
            userId={userId}
            socket={socket}
          />
        }
      />
    </StartLayout>
  );
};
