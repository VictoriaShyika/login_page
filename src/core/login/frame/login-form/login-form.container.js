import React from 'react';
import { Formik } from 'formik';

import { LoginFormComponent } from './login-form.component';

import { LOGIN_FORM_FIELD_KEY } from './login-form.type';

export function LoginFormContainer(props) {
  const {
    initialValue,
    validation,
    onSubmitForm,
    fieldName,
    isPending,
    isSuccess,
    isError,
    errorMessage,
  } = props;

  const LOGIN_NAME = fieldName[LOGIN_FORM_FIELD_KEY.LOGIN];
  const PASSWORD_NAME = fieldName[LOGIN_FORM_FIELD_KEY.PASSWORD];

  return (
    <div>
      <Formik
        initialValues={initialValue}
        validate={validation}
        onSubmit={onSubmitForm}
      >
        {(formProps) => (
          <LoginFormComponent
            fieldLogin={LOGIN_NAME}
            fieldPassword={PASSWORD_NAME}
            {...formProps}
            isPending={isPending}
            isSuccess={isSuccess}
            isError={isError}
            errorMessage={errorMessage}
          />
        )}
      </Formik>
    </div>
  );
}
