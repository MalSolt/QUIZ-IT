import { useEffect, useState } from 'react';
import { Dto } from '@shared';
import { axiosInstance } from 'shared/api/axiosInstance';

export const useTeams = () => {
  const [teams, setTeams] = useState<Dto.TeamPartialDto[]>([]);

  useEffect(() => {
    axiosInstance
      .get<Dto.TeamPartialDto[]>('/team')
      .then((res) => res.data)
      .then(setTeams)
      .catch(() => setTeams([]));
  }, []);

  return {
    teams,
  };
};
