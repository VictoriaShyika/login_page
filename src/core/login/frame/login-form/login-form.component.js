import React from 'react';
import { FieldPrimary } from '../../../../lib/elements/field';
import { FieldLayout } from '../../../../lib/elements/layout';
import { Button } from '../../../../lib/elements/button';
import { ServerError } from '../../../../lib/elements/server-error';

import { THEME_SIZE } from '../../../../lib/theme';

import {IoMdAlert} from "react-icons/io";

import styled from 'styled-components';

export function LoginFormComponent(props) {
  const {
    fieldLogin,
    fieldPassword,

    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,

    isPending,
    isSuccess,
    isError,
    errorMessage,

    } = props;

  const isFieldError = (name) => {
    return errors[name] && touched[name] && errors[name];
  };

  const isSubmitDisabled = () => {
    return isPending || isSuccess;
  };

  console.log(isError, errorMessage);

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <PageTitle>Вхід</PageTitle>
        <FieldLayout>
          <FieldPrimary
            titleTid="LOGIN.LOGIN_FORM.FIELD.LOGIN.TITLE"
            placeholderTid="LOGIN.LOGIN_FORM.FIELD.LOGIN.PLACEHOLDER"
            name={fieldLogin}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values[fieldLogin]}
            error={isFieldError(fieldLogin)}
          />
          <FieldPrimary
            type="password"
            titleTid="LOGIN.LOGIN_FORM.FIELD.PASSWORD.TITLE"
            placeholderTid="LOGIN.LOGIN_FORM.FIELD.PASSWORD.PLACEHOLDER"
            name={fieldPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values[fieldPassword]}
            error={isFieldError(fieldPassword)}
          />

          <Button type="submit" disabled={isSubmitDisabled()}>
            Увійти
          </Button>
          {isError && <ServerError> <Icon><IoMdAlert /></Icon> {errorMessage || "Користувача не знайдено"}</ServerError>}
        </FieldLayout>

        <Reset>
          Забули пароль? <Link>Відновити</Link>
        </Reset>
      </Container>
    </form>
  );
}

const Container = styled.div`
  display: grid;
  gap: 24px;
`;

const PageTitle = styled.div`
  font-weight: 700;
  font-size: ${THEME_SIZE.FONT.LARGE};
`;

const Reset = styled.div`
  color: #888888;
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;

const Link = styled.a`
  font-weight: 700;
  color: #fb6061;
  text-decoration: underline;
  cursor: pointer;
`;

const Icon = styled.span`
position: relative;
top: 2px;
padding-right: 8px`

