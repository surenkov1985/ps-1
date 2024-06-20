// @flow
import * as React from 'react';
import {ButtonHTMLAttributes} from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement > {
    color: string
    variant: string
    text: string
    size:string
}
export const Button = (props: ButtonProps) => {
    return (
        <button className={`btn btn-${props.variant} btn-${props.size} btn-${props.color}`} onClick={props.onClick}>{props.text}</button>
    );
};

