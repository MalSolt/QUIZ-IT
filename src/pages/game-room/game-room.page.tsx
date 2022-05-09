import { K, Store } from '@shared';
import { useServerGameModel } from 'entities/game';
import { useGameSocket } from 'shared/lib/game-socket';
import { PageLoader } from 'shared/ui/PageLoader';
import { GameStartScreen } from './game-start-screen';
import { GameQuestionScreen } from './game-question-screen';
import { GameResultsScreen } from './game-results-screen';
import { useGetMe } from 'entities/user';

export const GameRoomPage = () => {
  const { data: user } = useGetMe();
  const userId = user!.data.id;
  const teamId = user!.data.teamId;
  const { socket, connected } = useGameSocket(userId, teamId);
  const gameModel = useServerGameModel(socket);

  if (!gameModel) {
    return <PageLoader />;
  }

  if (!connected) {
    return (
      <PageLoader>
        Соеденение потеряно, повторное подключение. Пожалуйста, подождите...
      </PageLoader>
    );
  }

  const screenType = Store.selectGameScreenType(gameModel);

  switch (screenType) {
    case K.GameScreenType.QUESTION:
      return (
        <GameQuestionScreen
          gameModel={gameModel}
          userId={userId}
          socket={socket}
        />
      );
    case K.GameScreenType.START:
      return (
        <GameStartScreen
          gameModel={gameModel}
          userId={userId}
          socket={socket}
        />
      );
    case K.GameScreenType.RESULT:
      return (
        <GameResultsScreen
          gameModel={gameModel}
          userId={userId}
          socket={socket}
        />
      );
  }

  return <PageLoader />;
};
