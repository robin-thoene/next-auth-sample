import NextAuth from 'next-auth';
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
};

export default NextAuth(authOptions);
