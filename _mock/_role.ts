import { MockRequest, MockStatusError } from '@delon/mock';
// TIPS: mockjs 一些优化细节见：http://ng-alain.com/docs/mock
// import * as Mock from 'mockjs';

const list = [];
const total = 5;

for (let i = 0; i < total; i += 1) {
  list.push({
    id: i + 1,
    disabled: i % 6 === 0,
    href: 'https://ant.design',
    avatar: [
      'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
      'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
    ][i % 2],
    no: `${i + 1}`,
    title: `一个任务名称 ${i}`,
    owner: '曲丽丽',
    description: '这是一段描述',
    roleName: '角色'+Math.floor(Math.random() * 1000).toString(),
    status: Math.floor(Math.random() * 10) % 4,
    updatedAt: new Date(`2017-07-${Math.floor(i / 2) + 1}`),
    createdAt: new Date(`2017-07-${Math.floor(i / 2) + 1}`),
    progress: Math.ceil(Math.random() * 100),
  });
}

function genData(params: any) {
  let ret = [...list];
  const pi = +params.pi,
    ps = +params.ps,
    start = (pi - 1) * ps;

  if (params.roleName) {
    ret = ret.filter(data => data.roleName.indexOf(params.roleName) > -1);
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

export const ROLES = {
  '/role': (req: MockRequest) => genData(req.queryString),
  '/role/:id': (req: MockRequest) => list.find(w => w.id === +req.params.id),
  'POST /_role/:id': (req: MockRequest) => saveData(+req.params.id, req.body),
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
