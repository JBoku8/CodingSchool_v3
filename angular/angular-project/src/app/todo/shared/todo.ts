export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export type FindAllArgs = {
  start?: number;
  end?: number;
};

export type TodoStatus = 'completed' | 'isNotCompleted' | 'all';
