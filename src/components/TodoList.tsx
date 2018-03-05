import * as React from 'react';
import TodoItem from './TodoItem';
import { TodoItemData } from 'store/modules/todos';
import { List } from 'immutable';

interface Props {
  input: string;
  todoItems: List<TodoItemData>;
  onCreate(): void;
  onRemove(id: number): void;
  onToggle(id: number): void;
  onChange(e: any): void;
}

const TodoList: React.SFC<Props> = ({ input, todoItems, onCreate, onRemove, onToggle, onChange }) => {
  const todoItemList = todoItems.map(
    todo => todo ? (
      <TodoItem 
        key={todo.id}
        done={todo.done}
        onToggle={() => onToggle(todo.id)}
        onRemove={() => onRemove(todo.id)}
        text={todo.text}
      />
    ) : null
  );

  return (
    <div>
      <h1>오늘 뭐하지?</h1>
      <form 
        onSubmit={
          (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            onCreate();
          }
        }
      >
        <input onChange={onChange} value={input} />
        <button type="submit">추가하기</button>
      </form>
      <ul>
        {todoItemList}
      </ul>
    </div>
  );
};

// class TodoLists extends React.Component<Props, State> {
//   id: number = 0;

//   state: State = {
//     todoItems: [],
//     input: '',
//   };

//   onToggle = (id: number): void => {
//     const { todoItems } = this.state;
//     const index = todoItems.findIndex(todo => todo.id === id);
//     const selectedItem = todoItems[index];
//     const nextItems = [ ...todoItems ];

//     const nextItem = {
//       ...selectedItem,
//       done: !selectedItem.done,
//     };

//     nextItems[index] = nextItem;

//     this.setState({
//       todoItems: nextItems
//     });
//   }

//   onRemove = (id: number): void => {
//     this.setState(
//       ({ todoItems }) => ({
//         todoItems: todoItems.filter(todo => todo.id !== id)
//       })
//     );
//   }

//   onChange = (e: React.FormEvent<HTMLInputElement>): void => {
//     const { value } = e.currentTarget;
//     this.setState({
//       input: value
//     });
//   }

//   onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
//     e.preventDefault();

//     this.setState(
//       ({ todoItems, input }) => ({
//         input: '',
//         todoItems: todoItems.concat({
//           id: this.id++,
//           text: input,
//           done: false
//         })
//       })
//     );
//   }

//   render() {
//     const { onSubmit, onChange, onToggle, onRemove } = this;
//     const { input, todoItems } = this.state;

//     const todoItemList = todoItems.map(
//       todo => (
//         <TodoItem 
//           key={todo.id}
//           done={todo.done}
//           text={todo.text}
//           onToggle={() => onToggle(todo.id)}
//           onRemove={() => onRemove(todo.id)}
//         />
//       )
//     );

//     return (
//       <div>
//         <h1>오늘 뭐하지?</h1>
//         <form onSubmit={onSubmit}>
//           <input onChange={onChange} value={input} />
//           <button type="submit">추가하기</button>
//         </form>
//         <ul>
//           {todoItemList}
//         </ul>
//       </div>
//     );
//   }
// }

export default TodoList;