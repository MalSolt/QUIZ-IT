import { K, Store } from '@shared';
import { GameSocket } from 'shared/lib/game-socket';
import { QuestionResult } from 'entities/question';
import { ResultsLayout } from './ui/results-layout';

type Props = {
  gameModel: Store.RootState;
  userId: K.UserId;
  socket: GameSocket;
};
export const GameResultsScreen = ({ gameModel }: Props) => {
  const gameResult = Store.selectGameResult(gameModel);
  const gameDuration = Store.selectGameDuration(gameModel);
  const questionInfo = Store.selectQuestionInfo(gameModel);

  const rightAnswers = gameResult.reduce(
    (accum: number, current: Store.GameResultType) => {
      const isRightAnswer = (current.variants ?? []).find(
        (variant: Store.QuestionVariantType) => variant.buttonState === 'right',
      );

      if (isRightAnswer) {
        return accum + 1;
      }

      return accum;
    },
    0,
  );

  return (
    <ResultsLayout
      time={gameDuration}
      questionsNumber={questionInfo.questionsNumber}
      rightAnswers={rightAnswers}
      renderQuestions={() => (
        <>
          {gameResult.map((q: Store.GameResultType, index: number) => (
            <QuestionResult
              key={q.resultId}
              answers={(q.variants ?? []).map(
                (variant: Store.QuestionVariantType) => ({
                  content: {
                    text: variant.content.text ?? undefined,
                    imageSrc: variant.content.imageSrc ?? undefined,
                  },
                  state: variant.buttonState,
                }),
              )}
              content={{
                text: q.question.content.text ?? undefined,
                smallText: q.question.content.smallText ?? undefined,
                imageSrc: q.question.content.imageSrc ?? undefined,
              }}
              questionNumber={index + 1}
            />
          ))}
        </>
      )}
    ></ResultsLayout>
  );
};
