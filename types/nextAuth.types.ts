import { User, Account, Profile } from "next-auth";
import { AdapterUser } from "next-auth/adapters";

export interface SignInParams {
    user: User | AdapterUser;
    account: Account | null;
    profile?: Profile | undefined;
    email?: { verificationRequest?: boolean | undefined; } | undefined;
    credentials?: Record<any, any> | undefined;
}