import './meter.scss';
import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

export interface MeterProps extends HTMLAttributes<HTMLDivElement> {
  expertise: number;
  engagement: number;
}

const getGradient = (progress: number, color: string) => {
  const start = `${progress * 100}%`;
  const end = `${(1 - progress) * 100}%`;

  return `linear-gradient(to right, ${color} 0 ${start}, white ${start} ${end})`;
};


const Meter = (props: MeterProps) => {
  return (
    <div className={classNames('meter', props.className)}>
      <div
        style={{ background: getGradient(props.expertise, 'darkslategray') }}
        className="meter__expertise"
      />
      <div
        style={{ background: getGradient(props.engagement, 'skyblue') }}
        className="meter__engagement"
      />
    </div>
  );
};

export default Meter;
