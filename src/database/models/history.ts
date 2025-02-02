import { User } from './user';

export interface History {
  user: User;
  message: string;
  created_at: string;
  updated_at: string;
  chat: { id: string; name: string; isGroup: boolean };
}
