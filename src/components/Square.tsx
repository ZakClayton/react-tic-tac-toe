import * as React from 'react';

interface Props {
  value?: number,
  onClick(): void,
}

export const Square = (props: Props) => {
  return (
    <button
      className="square"
      onClick={props.onClick}
    >
      {props.value}
    </button>
  )
};