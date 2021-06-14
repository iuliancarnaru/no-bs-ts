import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState,
} from 'react';
import './App.css';
import fetch from 'node-fetch';

const Heading = ({ title }: { title: string }) => <h2>{title}</h2>;

const Box: FunctionComponent = ({ children }) => <div>{children}</div>;

const List: FunctionComponent<{
  items: string[];
  onClick?: (item: string) => void;
}> = ({ items, onClick }) => (
  <ul>
    {items.map((item, idx) => (
      <li key={idx} onClick={() => onClick?.(item)}>
        {item}
      </li>
    ))}
  </ul>
);

interface Payload {
  text: string;
}

interface Todo {
  id: number;
  done: boolean;
  text: string;
}

type ActionType =
  | { type: 'ADD'; text: string }
  | { type: 'REMOVE'; id: number };

const useNumber = (initialValue: number) => useState<number>(initialValue);

type UseNumberValue = ReturnType<typeof useNumber>[0];
type UseNumberSetValue = ReturnType<typeof useNumber>[1];

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

const Incrementer: FunctionComponent<{
  value: UseNumberValue;
  setValue: UseNumberSetValue;
}> = ({ value, setValue }) => (
  <Button
    type="button"
    onClick={() => setValue(value + 1)}
    title={` Add - ${value}`}
  />
);

function App() {
  const [payload, setPayload] = useState<Payload | null>(null);

  useEffect(() => {
    fetch('/data.json')
      .then((resp) => resp.json())
      .then((data) => {
        setPayload(data);
      });
  }, []);

  const [todos, dispatch] = useReducer((state: Todo[], action: ActionType) => {
    switch (action.type) {
      case 'ADD':
        return [...state, { id: state.length, text: action.text, done: false }];
      case 'REMOVE':
        return state.filter(({ id }) => id !== action.id);
      default:
        return state;
    }
  }, []);

  const newTodoRef = useRef<HTMLInputElement>(null);

  const onAddTodo = useCallback(() => {
    if (newTodoRef.current) {
      dispatch({
        type: 'ADD',
        text: newTodoRef.current.value,
      });

      newTodoRef.current.value = '';
    }
  }, []);

  const onListClick = useCallback((item: string) => alert(item), []);

  const [value, setValue] = useState(0);

  return (
    <div>
      <Heading title="Introduction" />
      <Box>Hello there</Box>
      <List items={['one', 'two', 'three']} onClick={onListClick} />
      <Box>{JSON.stringify(payload)}</Box>
      <Incrementer value={value} setValue={setValue} />

      <Heading title="Todos" />
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.text}
          <Button
            type="button"
            onClick={() => dispatch({ type: 'REMOVE', id: todo.id })}
          >
            Remove
          </Button>
        </div>
      ))}
      <div>
        <input type="text" ref={newTodoRef} />
        <Button onClick={onAddTodo}>Add</Button>
      </div>
    </div>
  );
}

export default App;
