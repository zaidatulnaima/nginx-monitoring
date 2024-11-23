import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 50,
  duration: '1m',
};

export default function () {
  let res = http.get('http://54.172.156.104:80');
  check(res, { 'status was 200': (r) => r.status === 200 });
  sleep(1);
}

