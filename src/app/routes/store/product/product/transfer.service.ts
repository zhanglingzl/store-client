import { Injectable } from '@angular/core';

@Injectable()
export class TransferService {
  step: 0 | 1 | 2 = 1;

  /**
   * 商品名称
   */
  productName: string;

  /**
   * 商品价格
   */
  productPrice: number;

  /**
   * 商品作用
   */
  effect: string;

  /**
   * 商品成分
   */
  ingredient: string;

  /**
   * 商品信息
   */
  description: string;

  /**
   * 质检报告
   */
  qualityReport: string;

  /**
   * 商品规格
   */
  specification: '0' | '1' | '2';



  again() {
    this.specification = '0';
  }

  constructor() {
    this.again();
  }
}
