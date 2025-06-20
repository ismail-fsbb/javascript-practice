import ChildA from './components/ChildA';
import ChildB from './components/ChildB';
import { useState } from 'react';

export default function  Drilling() {
  const [message, setMessage] = useState("Hello from Parent");

  return (
    <>
      <ChildA message={message} />
      <ChildB setMessage={setMessage} />
    </>
  );
}
