import { IStateUsers } from './state.users';
import { ICountPlayer } from './stateCountPlayers.types';

export interface RootStateUsers {
	users: IStateUsers[];
}

export interface RootStateCountPlayers {
	countPlayers: ICountPlayer;
}
