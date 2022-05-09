import { ReactNode } from 'react';
import classNames from 'classnames';
import { H2, I } from 'shared/ui';
import avatarImg from '../img/avatar.png';

type Props = {
  className?: string;
  name: string;
  gameNumber?: number;
  avatarSrc?: string;
  difficulty: string;
  questionsNumber: number;
  time: number;
  startDateTime: Date;
  usersCount: {
    online: number;
    total: number;
  };
  tags: string[];
  actions?: ReactNode;
};
export function GameInfo({
  name,
  usersCount,
  gameNumber,
  avatarSrc = avatarImg.src,
  questionsNumber,
  difficulty,
  startDateTime,
  time,
  tags,
  actions,
}: Props) {
  return (
    <div
      className={classNames(
        'w-[1018px] pt-[40px] pb-[72px] px-[40px] bg-white rounded-[48px] bg-gray-light',
      )}
    >
      <header className="flex justify-between">
        <H2>{name}</H2>
        {gameNumber && (
          <div className="flex justify-center items-center font-semibold w-[54px] h-[54px] rounded-full bg-gray">
            №{gameNumber.toString().padStart(2, '0')}
          </div>
        )}
      </header>
      <div className="flex items-start">
        {avatarSrc && (
          <img
            src={avatarSrc}
            alt=""
            className="mt-[24px] ml-[-8px] mr-[36px]"
          />
        )}
        <div className="flex grow pt-[36px]">
          <ul className="flex shrink-0 flex-col justify-between ">
            <InfoItem label="Сложность" value={difficulty} />
            <InfoItem label="Вопросов" value={questionsNumber.toString()} />
            <InfoItem label="Время" value={`${time} минут`} />
            <InfoItem
              label="Дата"
              value={new Date(startDateTime).toLocaleDateString()}
            />
            <InfoItem
              label="Игроки"
              value={`${usersCount.online} / ${usersCount.total}`}
            />
          </ul>
          <div className="ml-[32px] grow flex flex-col">
            <Tags tags={tags} />
            <div className="mt-[36px] self-center">{actions}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const InfoItem = (props: { label: string; value: string }) => {
  return (
    <li className="h-[42px]">
      <I className="w-[144px]">{props.label}</I>
      <b className="text-[1.4rem] leading-[160%]">{props.value}</b>
    </li>
  );
};

const Tags = ({ tags }: { tags: string[] }) => (
  <div className="flex flex-wrap mr-[-8px]">
    {tags.map((tag) => (
      <div
        key={tag}
        className="mr-[8px] mb-[8px] flex flex-wrap items-center justify-center bg-purple px-[24px] h-[44px] rounded-full text-white text-[1.125rem]"
      >
        {tag}
      </div>
    ))}
  </div>
);
