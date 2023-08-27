import React, { useEffect, useState } from "react";
import { Task } from "../types/Task";
import { deleteTasks, getTasks, putTasks } from "../api/Task";
import { sampleData } from "../sample/sample";

/**
 * TODO一覧を表示するコンポーネント
 * @returns 
 */
function TodoList() {
    const [todoList, setTodoList] = useState<Array<Task>>();
    const [editId, setEditId] = useState<number | null>(null);

    useEffect(() => {
        // getTasks(); // 本番用
        setTodoList(sampleData) // 動作確認
      }, []);
    
    return (
        <ul>
        {todoList?.map(item => (
          <li key={item.id}>
            <p>{item.title}</p>
            <button onClick={() => setEditId(item.id)}>編集</button>
            <button onClick={() => deleteTasks(item.id, getTasks)}>完全削除</button>
            {editId === item.id && (
              <div>
                <input
                  type="text"
                  value={item.title}
                  onChange={event => putTasks(item.id, event.target.value, getTasks, setEditId)}
                />
                <button onClick={() => setEditId(null)}>キャンセル</button>
              </div>
            )}
          </li>
        ))}
        </ul>
    );
}

export default TodoList;