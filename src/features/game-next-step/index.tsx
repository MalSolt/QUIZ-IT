import { BaseButton } from 'shared/ui';
import { Store } from '@shared';
import { GameSocket } from 'shared/lib/game-socket';

type Props = {
  className?: string;
  gameModel: Store.RootState;
  socket: GameSocket;
};

export const GameNextStepButton = ({ gameModel, className, socket }: Props) => {
  const handleNextStep = () => {
    socket.emit('nextStep');
  };

  const captainId = Store.selectCaptainId(gameModel);
  const isChecked = Store.selectQuestionIsChecked(gameModel);
  const isCaptainAnswer = Store.selectUserAnswer(gameModel, {
    userId: captainId,
  });

  console.log(captainId, isCaptainAnswer, isChecked);
  return (
    <>
      <BaseButton
        className={className}
        paddingRight={32}
        paddingLeft={40}
        height={72}
        withImg
        onClick={handleNextStep}
        disabled={!isCaptainAnswer && !isChecked}
      >
        {isChecked ? 'Дальше' : 'Проверить'}
      </BaseButton>
    </>
  );
};

