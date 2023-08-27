import React,{ useState, useEffect } from 'react';
import './index.css'



function App() {
  const [data, setData] = useState([]);
  const url="";
  const [content, setContent] = useState('');
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('/tasks')
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error('取得エラー:', error);
      });
  };

  const handlePost = () => {
    fetch('/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content })
    })
      .then(response => response.json())
      .then(newItem => {
        console.log('投稿結果:', newItem);
        fetchData();
      })
      .catch(error => {
        console.error('投稿エラー:', error);
      });
  };

  const handleEdit = (id, newContent) => {
    fetch('/tasks/{task_id}', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id, content: newContent, delete: false })
    })
      .then(response => response.json())
      .then(updatedItem => {
        console.log('編集結果:', updatedItem);
        fetchData();
        setEditId(null);
      })
      .catch(error => {
        console.error('編集エラー:', error);
      });
  };

  // const handleTempDelete = (id) => {
  //   fetch(`/tasks/{task_id}/done`, {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(id)
  //   })
  //     .then(response => response.json())
  //     .then(tempDeletedItem => {
  //       console.log('一時削除結果:', tempDeletedItem);
  //       fetchData();
  //     })
  //     .catch(error => {
  //       console.error('一時削除エラー:', error);
  //     });
  // };

  const handleDelete = (id) => {
    fetch(`/tasks/{task_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(id)
    })
      .then(response => response.json())
      .then(deletedItem => {
        console.log('完全削除結果:', deletedItem);
        fetchData();
      })
      .catch(error => {
        console.error('完全削除エラー:', error);
      });
  };
  return (
    <div>
      <h1>todo-mitch</h1>
      <div>
        <input
          type="text"
          value={content}
          onChange={event => setContent(event.target.value)}
        />
        <button onClick={handlePost}>追加</button>
      </div>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            {item.content}
            <button onClick={() => setEditId(item.id)}>編集</button>
            {/* <button onClick={() => handleTempDelete(item.id)}>一時削除</button> */}
            <button onClick={() => handleDelete(item.id)}>完全削除</button>
            {editId === item.id && (
              <div>
                <input
                  type="text"
                  value={item.content}
                  onChange={event => handleEdit(item.id, event.target.value)}
                />
                <button onClick={() => setEditId(null)}>キャンセル</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
  }
  
  export default App;