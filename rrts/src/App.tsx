import React, { FunctionComponent, useCallback } from 'react';
import './App.css';

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

function App() {
  const onListClick = useCallback((item: string) => alert(item), []);
  return (
    <div>
      <Heading title="Introduction" />
      <Box>Hello there</Box>
      <List items={['one', 'two', 'three']} onClick={onListClick} />
    </div>
  );
}

export default App;
