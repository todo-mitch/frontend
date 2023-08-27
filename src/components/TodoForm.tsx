import React, { useState } from "react";
import { postTasks } from "../api/Task";

/**
 * Todoを登録するフォームのコンポーネント
 * @returns 
 */
function TodoForm() {
    const [content, setContent] = useState('');

    return (
        <div>
        <input
          type="text"
          value={content}
          onChange={event => setContent(event.target.value)}
        />
        <button onClick={() => postTasks}>追加</button>
      </div>
    );
}

export default TodoForm;