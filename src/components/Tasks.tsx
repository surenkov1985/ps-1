// @flow
import * as React from 'react';
import {Task} from "./Task";

export type TaskProps = {
    taskId: number
    title: string
    isDone: boolean
};

type TaskListProps = {
    tasks: TaskProps[]
}
export const Tasks = (props: TaskListProps) => {
    return (
        <ul>
            {props.tasks.length ?
                props.tasks.map((item) => {

                    return (
                        <Task key={item.taskId} {...item} />

                    )
                })
                :
                <div>No tasks</div>
            }
        </ul>
    );
};