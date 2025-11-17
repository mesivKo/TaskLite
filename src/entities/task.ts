import { getRandomID } from '../utils/id';
import { isValidTaskTitle, normalizeTitle } from '../utils/validation';


export type Task = {
    readonly id: string;
    title: string;
    created: Date;
    complete: boolean;
    description?: string | undefined;
    deadline: Date | null;
};


export function makeTask(title:string, description?: string) {
    title = normalizeTitle(title);
    if (!isValidTaskTitle(title)) {
        console.error('Некорректное название задачи');
        throw new Error('Некорректное название задачи');
    }
    return {
        id: getRandomID(),
        title,
        created: new Date(),
        description,
        complete: false,
        deadline: null,
    };
}