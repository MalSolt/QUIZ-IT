import { K } from '@shared';
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { GameSocket } from '.';

export const useGameSocket = (userId: K.UserId, teamId: K.TeamId) => {
  const [connected, setConnected] = useState(false);
  const [socket] = useState<GameSocket>(() =>
    io(`${process.env.GAME_SOCKET_URL as string}`, {
      auth: {
        teamId,
        userId,
      },
      reconnection: true,
      reconnectionDelay: 500,
      reconnectionAttempts: Infinity,
    }),
  );

  useEffect(() => {
    socket.on('connect', () => {
      setConnected(true);
    });
  }, [socket]);

  useEffect(() => {
    socket.on('disconnect', () => {
      setConnected(false);
    });
  }, [socket]);

  useEffect(() => {
    return () => {
      socket && socket.removeAllListeners();
      socket && socket.close();
    };
  }, [socket]);

  return {
    socket,
    connected,
  };
};
