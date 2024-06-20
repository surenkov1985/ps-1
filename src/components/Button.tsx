// @flow
import * as React from 'react';
import {ButtonHTMLAttributes} from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement > {
    isCircle: boolean
    variant?: string
}
export const Button = (props: ButtonProps) => {
    return (
        <button {...props} onClick={props.onClick}>{props.title}</button>
    );
};

