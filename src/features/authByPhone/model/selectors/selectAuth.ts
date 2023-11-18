import { RootState } from 'app/providers/StoreProvider/config/store';

export const selectAuth = (state: RootState) => state.login;
