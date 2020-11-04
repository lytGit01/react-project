export interface IStoreState {
    todos: Todo[];
    visibilityFilter: VisibilityFilters;
}

export const enum VisibilityFilters {
    SHOW_ALL= 'SHOW_ALL',
    SHOW_COMPLETED = 'SHOW_COMPLETED',
    SHOW_ACTIVE = 'SHOW_ACTIVE'
}

export class Todo {
    public completed: boolean | undefined;
    public id: number | undefined;
    public text: string | undefined;
}