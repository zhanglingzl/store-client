import {BaseForm} from "./base-form";
import { Agency } from '../model/agency';

export class TradeForm extends BaseForm {
  agency: Agency = new Agency();
}
