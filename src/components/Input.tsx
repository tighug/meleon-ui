import React, { MouseEventHandler, ReactNode } from "react";
import styled from "styled-components";
import classnames from "classnames";
import { Icon } from "./Icon";

export type InputProps = {
  children?: ReactNode;
  prependIcon?: string;
  appendIcon?: string;

  label?: ReactNode;
  message?: string;
  errorMessage?: string;
  successMessage?: string;

  readonly?: boolean;
  disabled?: boolean;
  error?: boolean;
  success?: boolean;

  value?: string;

  onClickPrepend?: MouseEventHandler;
  onClickAppend?: MouseEventHandler;
};

export function Input({
  readonly = false,
  disabled = false,
  error = false,
  success = false,
  errorMessage = "error",
  successMessage = "success",
  message,
  children,
  prependIcon,
  appendIcon,
  onClickPrepend,
  onClickAppend,
}: InputProps) {
  const className = classnames({ readonly, disabled, error, success });
  const modifiedMessage = error
    ? errorMessage
    : success
    ? successMessage
    : message;

  return (
    <Wrapper className={className}>
      <Prepend>
        <InputIcon onClick={onClickPrepend}>
          <Icon>{prependIcon}</Icon>
        </InputIcon>
      </Prepend>
      <Control>
        <Slot>{children}</Slot>
        <Messages className={className}>
          <Message>{modifiedMessage}</Message>
        </Messages>
      </Control>
      <Append>
        <InputIcon onClick={onClickAppend}>
          <Icon>{appendIcon}</Icon>
        </InputIcon>
      </Append>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
  align-items: flex-start;
  max-width: 100%;
  font-size: 16px;
  color: ${(props) => props.theme.text.primary};
  text-align: left;
  letter-spacing: normal;

  &.success {
    color: ${(props) => props.theme.success};
  }
  &.error {
    color: ${(props) => props.theme.error};
  }
`;

export const Prepend = styled.div`
  display: inline-flex;
  margin-top: 4px;
  margin-right: 9px;
  margin-bottom: 4px;
  line-height: 1;
`;

export const InputIcon = styled.div`
  display: inline-flex;
  flex: 1 0 auto;
  align-items: center;
  justify-content: center;
  width: 24px;
  min-width: 24px;
  height: 24px;
`;

export const Control = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-wrap: wrap;
  width: 100%;
  min-width: 0;
  height: auto;
`;

export const Slot = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: inherit;
  margin-bottom: 8px;
  color: inherit;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
`;

export const Messages = styled.div`
  position: relative;
  flex: 1 1 auto;
  min-width: 1px;
  min-height: 14px;
  font-size: 12px;
  color: ${(props) => props.theme.text.secondary};
  text-align: left;

  &.success {
    color: ${(props) => props.theme.success};
  }
  &.error {
    color: ${(props) => props.theme.error};
  }
`;

export const Message = styled.div`
  hyphens: auto;
  line-height: 12px;
  word-break: break-word;
  word-wrap: break-word;
`;

export const Append = styled.div`
  display: inline-flex;
  margin-top: 4px;
  margin-bottom: 4px;
  line-height: 1;
`;
