import "./skill-row.scss";
import React, { FC, HTMLProps } from "react";
import classNames from "classnames";
import * as Text from "@components/text";

type SkillRowProps = {
  name: string;
} & HTMLProps<HTMLDivElement>;

export const SkillRow: FC<SkillRowProps> = ({ className, name }) => (
  <div className={classNames("skill-row", className)}>
    <Text.Regular>{name}</Text.Regular>
  </div>
);
