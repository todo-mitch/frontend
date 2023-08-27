/**
 * TODOリストのタスクの型
 */
export type Task = {
    title: string;
    id: number;
    done: boolean;
}

export type GetTasks =  (setData: React.Dispatch<React.SetStateAction<Task[] | undefined>>) => void
export type PostTasks = (content: string) => void
