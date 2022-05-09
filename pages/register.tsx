import { Dto } from '@shared';
import { ServerResponse } from 'http';
import { GetServerSideProps } from 'next';
import { RegisterPage } from 'pages/register/register.page';
import { axiosInstance } from 'shared/api/axiosInstance';

const redirect = (res: ServerResponse, pathname: string) => {
  res.statusCode = 302;
  res.setHeader('Location', pathname);
  res.end();
  return { props: {} };
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { res } = context;
  const registrationKey = context.query.registrationKey;
  let props: Dto.RegisterParamsResponseDto | {} = {};

  try {
    const res = await axiosInstance.get<Dto.RegisterParamsResponseDto>(
      `/auth/register-params-by-reg-key?registrationKey=${registrationKey}`,
    );

    props = { ...res.data };
  } catch (e) {
    return redirect(res, '/'); // redirect to error page
  }

  return { props };
};

export default RegisterPage;
