import { getMeKey } from 'entities/user';
import { axiosInstance } from 'shared/api/axiosInstance';
import { queryClient } from 'shared/api/reactQueryCache';
import { authStore } from 'shared/lib/auth';

export const setUp = () => {
  axiosInstance.interceptors.request.use((config) => {
    let updatedConfig = { ...config };

    const authToken = authStore.getToken();

    if (authToken && updatedConfig && updatedConfig.headers) {
      updatedConfig.headers.Authorization = `Bearer ${authToken}`;
    }

    return updatedConfig;
  });

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status === 401) {
        authStore.deleteToken();
        queryClient.invalidateQueries(getMeKey());
      }

      return Promise.reject(error);
    },
  );
};
