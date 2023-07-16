import Button from "./Button";

interface IFormProps {
  title: string;
  body: string;
  userId: number;
  setTitle: (title: string) => void;
  setBody: (body: string) => void;
  setUserId: (userId: number) => void;
  postSomeJson: () => void;
}

export default function Form({
  title,
  body,
  userId,
  setTitle,
  setBody,
  setUserId,
  postSomeJson,
}: IFormProps) {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Title"
            value={title}
            onChange={({ target: { value } }) => setTitle(value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Body
          </label>
          <textarea
            className="form-control"
            id="body"
            rows={3}
            placeholder="Body"
            value={body}
            onChange={({ target: { value } }) => setBody(value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            User ID
          </label>
          <input
            type="number"
            className="form-control"
            id="userId"
            placeholder="User ID"
            value={userId}
            onChange={({ target: { value } }) =>
              setUserId(value ? Number(value) : 0)
            }
          />
        </div>
        <Button
          click={postSomeJson}
          text="Submit"
          className="btn btn-primary"
        />
      </form>
    </>
  );
}
