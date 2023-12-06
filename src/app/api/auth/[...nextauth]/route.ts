import NextAuth from 'next-auth/next';
import { authOptions } from '@/server/authOptions';

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
