export class User {
    id?: number;
    loginName: string;
    name: string;
    state: number;
    telephone: string;
    wechat: string;
    password?: string;
    token?: string;
    createOperator?: string;
    createTime?: Date;
    updateOperator: string;
    updateTime?: Date;
}