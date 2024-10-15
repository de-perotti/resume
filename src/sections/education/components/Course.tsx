import React, {HTMLAttributes} from 'react';
import * as Heading from '@components/heading';

interface CourseProps extends HTMLAttributes<HTMLDivElement> {
    name: string;
    institution: string;
    from: string;
    to: string;
}

const Course = ({name, institution, className, from, to}: CourseProps) => (
    <div className={className}>
        <Heading.Tertiary style={{fontSize: '0.9rem'}}>
            {name}, <span  style={{ fontWeight: 'normal' }}>
            {institution}, {from}-{to}

        </span>
        </Heading.Tertiary>

    </div>
);

export default Course;
