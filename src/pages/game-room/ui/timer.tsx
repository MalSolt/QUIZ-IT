import { useTimer } from 'react-timer-hook';
import moment from 'moment';

type Props = {
    startedTime: Date;
    duration: number;
};

export const Timer = ({ startedTime, duration }: Props) => {
    const expiryTimestamp = new Date(+new Date(startedTime) + duration * 60000)

    const {
        seconds,
        minutes,
        hours,
    } = useTimer({ expiryTimestamp });

    const timer = moment().seconds(seconds).minutes(minutes).hours(hours).format('HH:mm:ss')

    return (
        <div>
            <div className="bg-gray-light rounded-[50px] text-center py-[14px] mt-[16px]">
                Осталось времени:&nbsp;
                {timer}
            </div>
        </div>
    );
}