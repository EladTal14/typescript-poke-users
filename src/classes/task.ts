import {Developer} from "./developer";

export class Task<T> {
    _tasks: T[] = []

    addTaskToTaskbar(newItem: T) {
        this._tasks.push(newItem)
    }

    removeTaskFromTaskbar(removeItem: T | number) {
        const newTasks = [...this._tasks]
        if (typeof removeItem === 'string') {
            newTasks.splice(this._tasks.findIndex(item => item === removeItem), 1)
        } else if (typeof removeItem === 'number') {
            if (!(typeof this._tasks[0] === 'number')) {
                console.warn('you sent a number not an item')
            }
            newTasks.splice(removeItem, 1)
        }
        this._tasks = newTasks
    }
}