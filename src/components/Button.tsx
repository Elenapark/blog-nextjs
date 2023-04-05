import React from 'react';

interface Props {
  title: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  [x: string]: any;
}

export default function Button({ title, type, onClick, ...props }: Props) {
  return (
    <button type={type} onClick={onClick} {...props}>
      {title}
    </button>
  );
}
