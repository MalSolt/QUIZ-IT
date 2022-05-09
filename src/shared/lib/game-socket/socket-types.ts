import { GameSocketTypes } from '@shared';
import { Socket } from 'socket.io-client';

export type GameSocket = Socket<
  GameSocketTypes.ServerToClientEvents,
  GameSocketTypes.ClientToServerEvents
>;
