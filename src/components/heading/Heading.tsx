import "./heading.scss";
import React, { HTMLAttributes } from "react";
import classNames from "classnames";

type HeadingElements = "h1" | "h2" | "h3";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  element: HeadingElements;
}

const Heading = ({ element, children, ...props }: HeadingProps) =>
  React.createElement(element, props, children);

export default Heading;

export function makeHeading(
  element: HeadingElements,
  headingClassName: string,
) {
  return ({ className, children, ...props }: Omit<HeadingProps, "element">) => (
    <Heading
      element={element}
      className={classNames("heading", headingClassName, className)}
      {...props}
    >
      {children}
    </Heading>
  );
}
