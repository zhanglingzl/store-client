
export class Agency {
    id?: number;
    token: string;
    name: string;
    gender: string;
    type: number;
    level: number;
    telephone: number;
    weChatId: string;
    wechat: string;
    likeName: string;
    expand: boolean;
    address: string;
    children?: Agency[];
    avatar: string;
}
