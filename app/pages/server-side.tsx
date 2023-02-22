import { getServerSession } from 'next-auth';
import { useSession } from 'next-auth/react';
import { authOptions } from './api/auth/[...nextauth]';

export default function ServerSide() {
    const session = useSession();
    if (session.data) {
        return <>Authorized</>;
    }
    return <>Unauthorized</>;
}

export async function getServerSideProps(context: any) {
    return {
        props: {
            session: await getServerSession(context.req, context.res, authOptions),
        },
    };
}
