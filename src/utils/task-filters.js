import {} from '../entitites/task.js';
export function taskFilters(arr) {
    return [...arr].sort((a, b) => a.created.getTime() - b.created.getTime());
}
//# sourceMappingURL=task-filters.js.map