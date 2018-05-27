import { MockRequest, MockStatusError } from '@delon/mock';
// TIPS: mockjs 一些优化细节见：http://ng-alain.com/docs/mock
// import * as Mock from 'mockjs';

const list = [];
const total = 20;
const agencys = ['个人','实体','个人','实体','个人','实体','个人','实体','个人','实体'];
const gender = ['男', '女','男', '女','男', '女','男', '女','男', '女'];

for (let i = 0; i < total; i += 1) {
  let gen = Math.floor(Math.random()*10);
  list.push({
    id: i + 1,
    disabled: i % 6 === 0,
    href: 'https://ant.design',
    avatar: [
      'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
      'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
    ][i % 2],
    no: `${i + 1}`,
    name: `用户 ${i + 1}`,
    agencyType: agencys[gen],
    gender: gender[gen],
    telephone: '139' + gen + '458' + gen + '903' + gen,
    weChatNo: 'wechat' + Math.floor(Math.random() * 10) % 4,
    cardNo: '-',
    company: '-',
    address: '-',
    email: '-',
    updatedAt: new Date(`2018-07-${Math.floor(i / 2) + 1}`),
    createdAt: new Date(`2017-07-${Math.floor(i / 2) + 1}`),
  });
}

function genData(params: any) {
  let ret = [...list];
  const pi = +params.pi,
    ps = +params.ps,
    start = (pi - 1) * ps;

  if (params.name) {
    ret = ret.filter(data => data.name.indexOf(params.name) > -1);
  }
  if (params.agency) {
    ret = ret.filter(data => data.agency.indexOf(params.agency) > -1);
  }

  return { total: ret.length, list: ret.slice(start, ps * pi) };
}

function saveData(id: number, value: any) {
  const item = list.find(w => w.id === id);
  if (!item) {
    return { msg: '无效用户信息' };
  }
  Object.assign(item, value);
  return { msg: 'ok' };
}

export const AGENCYS = {
  '/agency': (req: MockRequest) => genData(req.queryString),
  '/agency/:id': (req: MockRequest) => list.find(w => w.id === +req.params.id),
  'POST /_agency/:id': (req: MockRequest) => saveData(+req.params.id, req.body),
  // 支持值为 Object 和 Array
  'GET /users': { users: [1, 2], total: 2 },
  // GET 可省略
  // '/users/1': Mock.mock({ id: 1, 'rank|3': '★★★' }),
  // POST 请求
  'POST /role/1': { uid: 1 },
  // 获取请求参数 queryString、headers、body
  '/qs': (req: MockRequest) => req.queryString.pi,
  // 路由参数
  '/roles/:id': (req: MockRequest) => req.params, // /users/100, output: { id: 100 }
  // 发送 Status 错误
  '/404': () => {
    throw new MockStatusError(404);
  },
};
