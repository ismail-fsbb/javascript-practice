export default function ChildB({ setMessage }) {
    return (
      <button onClick={() => setMessage("Updated from Child B")}>
        Update Message
      </button>
    );
  }
  