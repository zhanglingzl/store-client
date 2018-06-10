import {Answer} from './answer';

export class Agency {
    id?: number;
    token: string;
    name: string;
    gender: string;
    type: number;
    level: number;
    telephone: number;
    weChatId: string;
    expand: boolean;
    address: string;
    children?: Agency[];
    answer?: Answer;
}
