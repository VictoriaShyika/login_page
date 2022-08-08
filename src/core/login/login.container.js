import React from 'react';

import { loginFormValidation } from './login.validation';
import { LOGIN_FIELD_NAME, LOGIN_FORM_FIELD_NAME } from './login.type';

import { LoginFormContainer } from './frame/login-form';
import { loginFormUplodData } from './login.action';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN_STORE_NAME } from './login.constant';
import {
  NAVIGATION_ACTION_TYPE,
  NAVIGATION_STORE_NAME,
} from '../../lib/common/navigation';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function LoginContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[LOGIN_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME],
  }));

  const loginFormSendData = (values) => {
    dispatch(loginFormUplodData(values));
  };

  const loginFormGetInitialValue = () => {
    return {
      [LOGIN_FIELD_NAME.LOGIN]: '',
      [LOGIN_FIELD_NAME.PASSWORD]: '',
    };
  };
  return (
    <LoginFormContainer
      validation={loginFormValidation}
      initialValue={loginFormGetInitialValue()}
      onSubmitForm={loginFormSendData}
      fieldName={LOGIN_FORM_FIELD_NAME}
      isPending={isRequestPending(state.loginForm)}
      isError={isRequestError(state.loginForm)}
      isSuccess={isRequestSuccess(state.loginForm)}
      errorMessage={getRequestErrorMessage(state.loginForm)}
      pageLoading={pageLoading}
    />
  );
}
