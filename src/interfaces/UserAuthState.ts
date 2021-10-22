export interface UserAuthState {
    username: string | null;
    isSuccess: boolean;
    isError: boolean;
    isLoggedIn: boolean;
    token?: string | null
}
