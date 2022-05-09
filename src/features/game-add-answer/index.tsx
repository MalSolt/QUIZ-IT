import { Store, K } from '@shared';
import { GameSocket } from 'shared/lib/game-socket';
import { QuestionAnswer } from 'entities/question';

type Props = {
  className?: string;
  gameModel: Store.RootState;
  userId: K.UserId;
  socket: GameSocket;
  variant: Store.QuestionVariantType;
};
export const GameAddAnswerButton = ({
  gameModel,
  variant,
  socket,
  userId,
  className,
}: Props) => {
  const handleChooseAnswer = () => {
    socket.emit('choiceVariantAnswer', variant.id);
  };

  if (!variant.content) {
    return null;
  }

  const buttonState = Store.selectButtonStateByPlayerIdAndVariantId(gameModel, {
    userId,
    variantId: variant.id,
  });

  const answersNumber = Store.selectAnswersCountByUserId(gameModel, userId);

  return (
    <QuestionAnswer
      className={className}
      key={variant.id}
      state={buttonState}
      answersNumber={answersNumber}
      content={{
        text: variant.content.text ?? undefined,
        imageSrc: variant.content.imageSrc ?? undefined,
      }}
      onClick={handleChooseAnswer}
    />
  );
};
