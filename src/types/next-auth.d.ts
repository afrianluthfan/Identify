import {
  DefaultSession,
  Account as NextAuthAccount,
  User as NextAuthUser,
  Profile as NextAuthProfile,
} from 'next-auth';
import { JWT as NextAuthJWT } from 'next-auth/jwt';

interface User extends NextAuthUser {
  id: string;
  country: string;
}

declare module 'next-auth' {
  interface Session extends DefaultSession {
    accessToken?: string;
    error?: string;
    user?: User;
  }
  interface Account extends NextAuthAccount {
    expires_at: number;
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends NextAuthJWT {
    accessToken?: string;
    refreshToken?: string;
    accessTokenExpires?: number;
    error?: string;
    user?: User;
  }
}

declare module 'next-auth' {
  interface Profile extends NextAuthProfile {
    id: string;
    country: string;
  }
}
