import React from 'react';
import './rotate3d.css';

const Rotate3D = ({ children }) => {
    return (
        <span className="inline-block animate-rotate3d transform-style-3d perspective-1000 text-shadow-md">
            {children}
        </span>
    );
};

export default Rotate3D;
