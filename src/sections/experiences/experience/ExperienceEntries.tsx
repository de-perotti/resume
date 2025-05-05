import "./experience-entries.scss";
import React, { HTMLAttributes } from "react";

export const ExperienceEntries = ({
  children,
}: HTMLAttributes<HTMLDivElement>) => (
  <div className="experience-entries">{children}</div>
);
