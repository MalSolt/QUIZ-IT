import { useGetMe } from 'entities/user';
import Router from 'next/router';
import { GameRoomPage } from 'pages/game-room/game-room.page';
import { authStore } from 'shared/lib/auth';
import { isServer } from 'shared/lib/isServer';
import { Loader } from 'shared/ui/Loader';

const Game = () => {
  const { data: me } = useGetMe();

  if (!isServer() && !authStore.getToken()) {
    Router.push('/login');
    console.log('here');
    return null;
  }

  if (!me?.data) {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return <GameRoomPage />;
};

export default Game;
