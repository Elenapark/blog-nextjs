import React from 'react';
type Props = {
  title: string;
  [x: string]: any;
};

export default function Chip({ title, ...props }: Props) {
  return <div {...props}>{title}</div>;
}
