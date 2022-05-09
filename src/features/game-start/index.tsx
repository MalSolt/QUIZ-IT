import { useEffect, useRef } from 'react';
import { BaseButton } from 'shared/ui';
import { Store } from '@shared';
import { GameSocket } from 'shared/lib/game-socket';

type Props = {
  className?: string;
  gameModel: Store.RootState;
  userId: number;
  socket: GameSocket;
};

export const GameStartButton = ({
  userId,
  gameModel,
  className,
  socket,
}: Props) => {
  const isNotTimeYet = useRef(false);
  const gameInfo = Store.selectGameInfo(gameModel);
  const isCaptain = Store.selectPlayerIsCaptain(gameModel, userId);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = new Date();
      isNotTimeYet.current = gameInfo.startTime > currentDate;
    }, 1000);

    return () => clearInterval(intervalId);
  });

  const handleStartGame = () => {
    socket.emit('nextStep');
  };

  if (!isCaptain) {
    return null;
  }

  return (
    <BaseButton
      height={70}
      paddingLeft={45}
      paddingRight={45}
      className={className}
      disabled={isNotTimeYet.current}
      onClick={handleStartGame}
    >
      Старт!
    </BaseButton>
  );
};
