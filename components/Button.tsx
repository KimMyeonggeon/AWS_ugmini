import React from 'react';
import { TextStyle, StyleProp, ViewStyle } from 'react-native';

import styled from '@emotion/native';

type TButton = 'primary' | 'secondary' | 'destructive';

type TButtonProps = {
  onPress?: () => void;
  type?: TButton;
  styles?: {
    text?: StyleProp<TextStyle>;
    container?: StyleProp<ViewStyle>;
  };
  disabled?: boolean;
  title: string;
  renderLeftIcon?: (
    color?: string,
    width?: number,
    height?: number
  ) => JSX.Element;
  renderRightIcon?: (
    color?: string,
    width?: number,
    height?: number
  ) => JSX.Element;
};

const ButtonTitle = styled.Text<{ type: TButton; disabled: boolean }>`
  ${(props) =>
    props.type === 'primary'
      ? props.disabled
        ? `color: white`
        : `color: #789AFF`
      : ''};
  ${(props) =>
    props.type === 'secondary'
      ? props.disabled
        ? `color: #4169E1`
        : `color: #CBD1D9`
      : ''};
  ${(props) =>
    props.type === 'destructive'
      ? props.disabled
        ? `color: white`
        : `color: white`
      : ''};
  text-align: center;
  font-family: Pretendard700;
  font-size: 18px;
`;

const ButtonContainer = styled.TouchableOpacity<{
  type: TButton;
  disabled: boolean;
}>`
  ${(props) =>
    props.type === 'primary'
      ? props.disabled
        ? `background-color: #4169E1`
        : `background-color: #E7ECFF`
      : ''};
  ${(props) =>
    props.type === 'secondary'
      ? props.disabled
        ? `background-color: #E7ECFF`
        : `background-color:#EEF1F3`
      : ''};
  ${(props) =>
    props.type === 'destructive'
      ? props.disabled
        ? `background-color: #EEF1F3`
        : `background-color: #EEF1F3`
      : ''};
`;

export default function Button(props: TButtonProps) {
  const {
    type = 'primary',
    styles,
    title,
    onPress = () => {},
    disabled = false,
    renderLeftIcon,
    renderRightIcon,
  } = props;
  return (
    <ButtonContainer
      type={type}
      style={styles?.container}
      onPress={onPress}
      disabled={disabled}
    >
      {renderLeftIcon
        ? renderLeftIcon(
            type === 'primary'
              ? 'white'
              : type === 'secondary'
              ? '#789AFF'
              : '#E7ECFF',
            2,
            2
          )
        : null}
      <ButtonTitle style={styles?.text} type={type} disabled={disabled}>
        {title}
      </ButtonTitle>
      {renderRightIcon
        ? renderRightIcon(
            type === 'primary'
              ? 'white'
              : type === 'secondary'
              ? '#789AFF'
              : '#E7ECFF',
            2,
            2
          )
        : null}
    </ButtonContainer>
  );
}
