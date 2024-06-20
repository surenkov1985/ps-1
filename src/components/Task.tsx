// @flow 
import * as React from 'react';
import {TaskProps} from "./Tasks";

export const Task = (props: TaskProps) => {
    return (
        <li>
            <span>{props.title} :</span>
            <span>{props.isDone && " isDone"}</span>
        </li>
    );
};