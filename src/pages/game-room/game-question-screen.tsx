import { ReactNode } from 'react';
import classNames from 'classnames';
import { K, Store } from '@shared';
import { GameSocket } from 'shared/lib/game-socket';
import { QuestionContent } from 'entities/question';
import { GameNextStepButton } from 'features/game-next-step';
import { GameAddAnswerButton } from 'features/game-add-answer';
import { CurrentQuestionInfo } from './ui/current-question-info';
import { QuestionLayout } from './ui/question-layout';

type Props = {
  gameModel: Store.RootState;
  userId: K.UserId;
  socket: GameSocket;
};
export const GameQuestionScreen = ({ gameModel, socket, userId }: Props) => {
  const gameQuestionInfo = Store.selectQuestionInfo(gameModel);
  const isCaptain = Store.selectPlayerIsCaptain(gameModel, userId);
  const question = Store.selectQuestion(gameModel);
  const variants = Store.selectQuestionVariants(gameModel, question.id);
  const content = question?.content;
  const gameInfo = Store.selectGameInfo(gameModel);
  

  return (
    <QuestionLayout
      renderQuestion={(cn) => (
        <QuestionContent
          className={cn}
          variant="dark"
          content={{
            imageSrc: content?.imageSrc ?? undefined,
            smallText: content?.smallText ?? undefined,
            text: content?.text ?? undefined,
          }}
        />
      )}
      renderAnswers={(cn) => (
        <AnswersList className={cn}>
          {variants.map((variant: Store.QuestionVariantType) => (
            <GameAddAnswerButton
              key={variant.id}
              gameModel={gameModel}
              variant={variant}
              socket={socket}
              userId={userId}
            />
          ))}
        </AnswersList>
      )}
      renderQuestionInfo={(cn) => (
        <CurrentQuestionInfo
          className={cn}
          currentQuestionNumber={gameQuestionInfo.currentQuestionNumber ?? 1}
          questionsNumber={gameQuestionInfo.questionsNumber}
          startedTime={gameInfo.startedTime}
          duration={gameInfo.duration}
          action={
            isCaptain ? (
              <GameNextStepButton gameModel={gameModel} socket={socket} />
            ) : undefined
          }
        />
      )}
    />
  );
};

const AnswersList = (props: { children: ReactNode; className?: string }) => {
  return (
    <div
      className={classNames(
        props.className,
        'grid grid-cols-[1fr_1fr] gap-x-[32px] gap-y-[16px]',
      )}
    >
      {props.children}
    </div>
  );
};
