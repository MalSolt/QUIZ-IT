import { DefaultRenderSlot } from 'shared/types';

type Props = {
  renderQuestion: DefaultRenderSlot;
  renderAnswers: DefaultRenderSlot;
  renderQuestionInfo: DefaultRenderSlot;
};
export const QuestionLayout = ({
  renderAnswers,
  renderQuestion,
  renderQuestionInfo,
}: Props) => {
  return (
    <div className="py-[100px] px-[80px]">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid gap-x-[160px] grid-cols-[2fr_1fr]">
          <div className="">
            {renderQuestion('')}
            {renderAnswers('mt-[64px]')}
          </div>
          <div className="">{renderQuestionInfo('')}</div>
        </div>
      </div>
    </div>
  );
};
