import type { Task } from './task';

const STORAGE_KEY = 'tasks';
export function saveTasks(tasks: Task[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

export function loadTasks(): Task[] {
    const result = localStorage.getItem(STORAGE_KEY);
    if (!result) return [];

    const parsed = JSON.parse(result);
    return parsed.map((t: Task) => ({
        ...t,
        created: new Date(t.created),
        deadline: t.deadline ? new Date(t.deadline) : null,
    }));
}