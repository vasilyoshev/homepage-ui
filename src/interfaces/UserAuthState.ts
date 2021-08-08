export interface UserAuthState {
    username: string | undefined;
    isSuccess: boolean;
    isLoggedIn: boolean;
    isError: boolean;
    errorMessage: string | null;
}
