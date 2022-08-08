import { httpRequest } from '../../main/http';
import { LOGIN_ACTION_TYPE } from './login.type';
import { LOGIN_API } from './login.constant';
import { authSetData } from '../../lib/common/auth';

export function loginFormUplodData(data) {
  return async (dispatch) => {
    dispatch({ type: LOGIN_ACTION_TYPE.LOGIN_FORM_UPLOAD_PENDING });

    try {
      const res = await httpRequest({
        method: LOGIN_API.LOGIN_FORM_UPLOAD.METHOD,
        url: LOGIN_API.LOGIN_FORM_UPLOAD.PATH,
        data,
      });

      dispatch(authSetData(res.data.accessToken));

      dispatch({ type: LOGIN_ACTION_TYPE.LOGIN_FORM_UPLOAD_SUCCESS });

      alert('hi');
    } catch (error) {
      console.log(error);

      dispatch({ type: LOGIN_ACTION_TYPE.LOGIN_FORM_UPLOAD_ERROR });
    }
  };
}
