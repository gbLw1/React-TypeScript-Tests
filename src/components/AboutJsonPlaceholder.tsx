export default function AboutJsonPlaceholder() {
  return (
    <>
      <p>
        Try to click the button below and see the result from the API call in
        the right side of the screen.
      </p>
      <p>
        A request is made to{" "}
        <a
          href="https://jsonplaceholder.typicode.com/todos/1"
          target="_blank"
          rel="noreferrer"
        >
          https://jsonplaceholder.typicode.com/todos/1
        </a>{" "}
        and the response is shown in the right side of the screen.
      </p>
      <p>
        See more at{" "}
        <a
          href="https://jsonplaceholder.typicode.com/"
          target="_blank"
          rel="noreferrer"
        >
          https://jsonplaceholder.typicode.com/
        </a>
      </p>
    </>
  );
}
