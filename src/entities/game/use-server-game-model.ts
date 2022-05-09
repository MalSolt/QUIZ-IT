import { Store } from '@shared';
import { useEffect, useState } from 'react';
import { GameSocket } from 'shared/lib/game-socket';

export const useServerGameModel = (socket: GameSocket) => {
  const [gameModel, setGameModel] = useState<Store.RootState | null>(null);

  useEffect(() => {
    socket.on('setGame', (data: Store.RootState) => {
      setGameModel(data);
    });
  }, [socket]);

  return gameModel;
};
