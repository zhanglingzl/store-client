import {BaseForm} from "./base-form";

export class UserForm extends BaseForm {
    loginName: string;
    telephone: string;
    wechart: string;
    status: string|number;
    statusList: any[];
}
