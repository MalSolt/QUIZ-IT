import cn from 'classnames';
import { getMeKey, useGetMe } from 'entities/user';
import { useQueryClient } from 'react-query';
import { authStore } from 'shared/lib/auth';

export const Logout = () => {
  const { data: me } = useGetMe();
  const queryClient = useQueryClient();

  const logout = () => {
    authStore.deleteToken();
    queryClient.setQueryData(getMeKey(), null);
  };

  const isInvisible = !me?.data;

  return (
    <button
      className={cn('flex flex-row ', {
        invisible: isInvisible,
      })}
      onClick={logout}
    >
      <div className="mr-2 text-lg">Выйти</div>
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 21.5H5C4.46957 21.5 3.96086 21.2893 3.58579 20.9142C3.21071 20.5391 3 20.0304 3 19.5V5.5C3 4.96957 3.21071 4.46086 3.58579 4.08579C3.96086 3.71071 4.46957 3.5 5 3.5H9"
          stroke="#3F2A79"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 17.5L21 12.5L16 7.5"
          stroke="#3F2A79"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 12.5H9"
          stroke="#3F2A79"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};
