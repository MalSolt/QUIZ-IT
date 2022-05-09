import { ConfirmEmailPage } from 'pages/confirm-email/confirm-email.page';
import { axiosInstance } from 'shared/api/axiosInstance';
import { ServerResponse } from 'http';
import { GetServerSideProps } from 'next';
import { Dto } from '@shared';

const redirect = (res: ServerResponse, pathname: string) => {
    res.statusCode = 302;
    res.setHeader('Location', pathname);
    res.end();
    return { props: {} };
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { res, query } = context
    try {
        await axiosInstance.post<Dto.ConfirmUserEmailDto>(`/user/confirm-email`, query);
    } catch (e) {
        return redirect(res, '/'); // redirect to error page
    }
    return {
        props: {}
    }
}

export default ConfirmEmailPage;
