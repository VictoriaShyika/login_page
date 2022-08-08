import styled from "styled-components";

import { TextSecondary } from "../text";
import { spacing } from "../../theme";
import { FieldPrimaryPropsType } from "./field.type";

import { THEME_SIZE } from "../../theme";

import { text } from '../../common/text'

export function FieldPrimary(props: FieldPrimaryPropsType) {
  const {
    type,
    titleTid,
    placeholderTid,
    name,
    onChange,
    onBlur,
    value,
    error,
  } = props;

  return (
    <Container>
      <InputFrame>
        <Title tid={titleTid} />
        <Input
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          name={name}
          placeholder={text(placeholderTid)}
          type={type}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </InputFrame>
    </Container>

  )
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputFrame = styled.div`
  display: grid;
  gap: 8px;
`;

const Title = styled(TextSecondary)`
  margin-bottom: ${spacing(1)};
  color: #363636;
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;

const Input = styled.input`
  height: 46px;
  background: #F7F7F7;
  border-radius: 10px;
  padding: 16px 16px;
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  &:hover {
    outline: 1px solid #FB6061;
  }
`;

const ErrorMessage = styled.span`
  color: #FB6061;
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  `