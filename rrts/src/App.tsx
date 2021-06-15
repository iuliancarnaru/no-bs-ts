import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  Dispatch,
  FunctionComponent,
  HTMLAttributes,
  ReactNode,
  SetStateAction,
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState,
} from 'react';
import { useTodos } from './useTodos';
import './App.css';
import fetch from 'node-fetch';

const Heading = ({ title }: { title: string }) => <h2>{title}</h2>;

const Box: FunctionComponent = ({ children }) => <div>{children}</div>;

const Button: FunctionComponent<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> & { title?: string } = ({ title, children, style, ...rest }) => (
  <button
    {...rest}
    style={{
      ...style,
      backgroundColor: 'purple',
      color: 'white',
      fontSize: 'large',
    }}
  >
    {title ?? children}
  </button>
);

function UL<T>({
  items,
  render,
  itemClick,
}: DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> & {
  items: T[];
  render: (item: T) => ReactNode;
  itemClick: (item: T) => void;
}) {
  return (
    <ul>
      {items.map((item, idx) => (
        <li onClick={() => itemClick(item)} key={idx}>
          {render(item)}
        </li>
      ))}
    </ul>
  );
}

function App() {
  const { todos, addTodo, removeTodo } = useTodos([
    {
      id: 0,
      text: 'Hey there',
      done: false,
    },
  ]);
  const newTodoRef = useRef<HTMLInputElement>(null);

  const onAddTodo = useCallback(() => {
    if (newTodoRef.current) {
      addTodo(newTodoRef.current.value);
      newTodoRef.current.value = '';
    }
  }, [addTodo]);

  return (
    <div>
      <Heading title="Introduction" />
      <Box>Hello there</Box>

      <Heading title="Todos" />
      <UL
        itemClick={(item) => alert(item.id)}
        items={todos}
        render={(todo) => (
          <>
            {todo.text}
            <Button type="button" onClick={() => removeTodo(todo.id)}>
              Remove
            </Button>
          </>
        )}
      />
      <div>
        <input type="text" ref={newTodoRef} />
        <Button onClick={onAddTodo}>Add</Button>
      </div>
    </div>
  );
}

export default App;
