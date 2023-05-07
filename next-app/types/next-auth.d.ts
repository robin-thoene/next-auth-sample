import NextAuth from 'next-auth';
import * as JWT from 'next-auth/jwt';

declare module 'next-auth' {
    interface Session {
        accessToken?: string;
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        accessToken?: string;
    }
}
