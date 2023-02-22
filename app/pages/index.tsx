import { signIn, signOut, useSession } from 'next-auth/react';

export default function Home() {
    const session = useSession();
    if (session.data) {
        return (
            <>
                <button onClick={() => signOut()}>Logout</button>
            </>
        );
    }
    return (
        <>
            <button onClick={() => signIn('azure-ad')}>Login</button>
        </>
    );
}
