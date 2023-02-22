import NextAuth, { Account, Profile, Session, User } from 'next-auth';
import { AdapterUser } from 'next-auth/adapters';
import { JWT } from 'next-auth/jwt';
import AzureAdProvider from 'next-auth/providers/azure-ad';

export const authOptions = {
    providers: [
        AzureAdProvider({
            id: 'azure-ad',
            clientId: process.env.CLIENT_ID ?? '',
            clientSecret: process.env.CLIENT_SECRET ?? '',
            tenantId: process.env.TENANT_ID ?? '',
        }),
    ],
    callbacks: {
        async jwt({
            token,
            account,
        }: {
            token: JWT;
            user?: User | AdapterUser | undefined;
            account?: Account | null | undefined;
            profile?: Profile | undefined;
            isNewUser?: boolean | undefined;
        }) {
            if (account) {
                token.accessToken = account.access_token;
            }
            return token;
        },
        async session({ session, token }: { session: Session; user: User | AdapterUser; token: JWT }) {
            session.accessToken = token.accessToken;
            return session;
        },
    },
};

export default NextAuth(authOptions);
