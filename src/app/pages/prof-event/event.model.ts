import { User } from 'firebase/auth';

export interface CustomUser extends User{
    fullname: string;
}