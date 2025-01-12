// Type definitions for drag-timetable 1.0
// Project: https://github.com/DJAndries/drag-timetable
// Definitions by: chinkan <https://github.com/chinkan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/** Declaration file generated by dts-gen */

export function create(container: HTMLElement | null, options: any): TimetableInstance;

export namespace create {
    const prototype: {};
}

export class TimetableInstance {
    constructor(contextObj: any);

    setMoveCallback(moveCallback: (task: any) => void): void;

    setClickCallback(clickCallback: (task: any) => void): void;

    addTask(task: any, isAddingToTimetable: boolean): HTMLDivElement;

    removeTask(taskId: any): void;

    getTask(taskId: any): any;
}

export class TimetableTask {
    constructor(task: any, taskAreaSize: any);

    updateTaskUI(): void;

    getTimeElement(): HTMLDivElement;
}
