import { MockRequest } from '@delon/mock';

// region: mock data
const titles = [
  '商品1',
  '商品2',
  '商品3',
  '商品4',
  '商品5',
  '商品6',
  '商品7',
  '商品8',
];

const avatars = [
  'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png', // Alipay
  'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png', // Angular
  'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png', // Ant Design
  'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png', // Ant Design Pro
  'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png', // Bootstrap
  'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png', // React
  'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png', // Vue
  'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png', // Webpack
];
const covers = [
  'https://gw.alipayobjects.com/zos/rmsportal/HrxcVbrKnCJOZvtzSqjN.png',
  'https://gw.alipayobjects.com/zos/rmsportal/alaPpKWajEbIYEUvvVNf.png',
  'https://gw.alipayobjects.com/zos/rmsportal/RLwlKSYGSXGHuWSojyvp.png',
  'https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png',
];
const effect = [
  '美容养颜',
  '保湿',
  '控油',
  '补水',
  '美肌',
];
const ingredient = [
  '成分1',
  '成分2',
  '成分3',
  '成分4',
  '成分5',
];

const list = [];
for (let i = 0; i < 8; i += 1) {
  list.push({
    id: `fake-list-${i}`,
    productName: titles[i % 8],
    avatar: avatars[i % 8],
    cover:
      parseInt((i / 4).toString(), 10) % 2 === 0
        ? covers[i % 4]
        : covers[3 - i % 4],
    effect: effect[i % 5],
    ingredient : ingredient[i % 5]
  });
}
// endregion
function getFakeList(count: number = 20): any[] {
  return list;
}


function removeRule(id: string): boolean {
    const idx = list.findIndex(w => w.id === id);
    if (idx !== -1) list.splice(idx, 1);

  return true;
}

function add(record) {
  const i = Math.ceil(Math.random() * 10000);

  list.unshift({
    id: `fake-list-${i}`,
    productName: record.productName,
    avatar: avatars[i % 8],
    cover:
      parseInt((i / 4).toString(), 10) % 2 === 0
        ? covers[i % 4]
        : covers[3 - i % 4],
    effect: record.effect,
    ingredient: record.ingredient,
  });
}
function update(id: string, value: any) {
  const item = list.find(w => w.id === id);
  if (!item) {
    return { msg: '无效用户信息' };
  }
  Object.assign(item, value);
  return { msg: 'ok' };
}

export const APIS = {
  '/product/list': (req: MockRequest) => getFakeList(req.queryString.count),
  'POST /product/update': (req: MockRequest) => update(req.body.id,req.body.record),
  'DELETE /product': (req: MockRequest) => removeRule(req.queryString.id),
  'POST /product': (req: MockRequest) => add(req.body.record),
};
