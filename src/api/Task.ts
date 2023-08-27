/**
 * タスクを取得する関数
 * @param props 
 */
export const getTasks = (setData: any) => {
  fetch('https://todocode.azurewebsites.net/tasks')
    .then(res => res.json())
    .then(data => {
      setData(data);
      console.log(data)
    })
    .catch(error => {console.error(error);});
};

/**
 * タスクを作成する関数
 * @param props 
 */
export function postTasks(getTasks: any, content:any){

  fetch('https://todocode.azurewebsites.net/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ content })
  })
    .then(response => response.json())
    .then(newItem => {
      console.log('投稿結果:', newItem);
      getTasks();
    })
    .catch(error => {console.error(error);});
};

/**
 *  タスクを更新する関数
 * @param props 
 */
export function putTasks(id: number, newTitle :string, getTasks:any, setEditId:any){
  fetch('https://todocode.azurewebsites.net/tasks/{task_id}', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id, title: newTitle, delete: false })
  })
    .then(response => response.json())
    .then(updatedItem => {
      console.log('編集結果:', updatedItem);
      getTasks();
      setEditId(null);
    })
    .catch(error => {console.error(error);});
};
  
/**
 * タスクを削除する関数
 * @param props 
 */
export function deleteTasks(id:number , getTasks:any){
  fetch(`https://todocode.azurewebsites.net/tasks/{task_id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(id)
  })
    .then(response => response.json())
    .then(deletedItem => {
      console.log('完全削除結果:', deletedItem);
      getTasks();
    })
    .catch(error => {console.error(error);});
};