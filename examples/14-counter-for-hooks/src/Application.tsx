import { useState, ChangeEvent, useCallback } from 'react';

const inc = (count: number) => count + 1;
const dec = (count: number) => count - 1;

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const reset = useCallback(() => setCount(0), []);
  const handleChangeCount = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setCount(Number(event.target.value));
    },
    []
  );

  console.log('Console render');

  return (
    <main className="Counter">
      <h1>Days Since Last Incident</h1>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={() => setCount(inc)}>Increment</button>
        <button onClick={reset}>Reset</button>
        <button onClick={() => setCount(dec)}>Decrement</button>
      </section>
      <section className="controls">
        <form onSubmit={() => {}}>
          <label htmlFor="set-to">Set Count</label>
          <input onChange={handleChangeCount} id="set-to" type="number" />
          <input type="submit" />
        </form>
      </section>
    </main>
  );
};

const Application = () => <Counter />;

export default Application;
