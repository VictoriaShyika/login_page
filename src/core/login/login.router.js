import { setActivePath } from '../../lib/common/navigation';
import {
  LOGIN_ROUTE_PATH,
} from '../login/login.constant';

export function LoginRouter(ctx) {
  ctx.store.dispatch(setActivePath(LOGIN_ROUTE_PATH));
}
