import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

interface TextProps extends HTMLAttributes<any> {
  element: string;
}

const Text = ({ element, children, ...props }: TextProps) => (
  React.createElement(element, props, children));

export default Text;

export function makeText(element: string, textClassName: string) {
  return ({ className, children, ...props }: Omit<TextProps, 'element'>) => (
    <Text
      element={element}
      className={classNames('text', textClassName, className)}
      {...props}
    >
      {children}
    </Text>
  );
}
