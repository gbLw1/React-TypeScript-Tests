import { useState } from "react";
import axios from "axios";
import Button from "../components/Button";
import LoadingSpinner from "../components/LoadingSpinner";
import Form from "../components/Form";
import AboutJsonPlaceholder from "../components/AboutJsonPlaceholder";
import Layout from "../components/Layout";

export default function App() {
  // Screen states
  const [loading, setLoading] = useState<boolean>(false);
  const [postFormVisible, setPostFormVisible] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  // Form states
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [userId, setUserId] = useState<number>(0);

  // API response
  const [response, setResponse] = useState<string>("");

  async function getSomeJson() {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      );

      setResponse(JSON.stringify(response.data, null, 2));
    } catch (error: any) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function postSomeJson() {
    try {
      setLoading(true);
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title: title || "foo",
          body: body || "bar",
          userId: userId,
        }
      );

      setResponse(JSON.stringify(response.data, null, 2));
    } catch (error: any) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  }

  function testError() {
    if (errorMessage) setErrorMessage("");
    else setErrorMessage("This is a test error");
  }

  return (
    <Layout>
      <div className="row">
        <div className="col-lg-6">
          <div className="row mb-4">
            <div className="col-lg-12">
              <AboutJsonPlaceholder />
              {/* Request buttons */}
              <Button
                click={getSomeJson}
                text="GET"
                className="btn btn-success"
              />
              <Button
                click={() => setPostFormVisible(!postFormVisible)}
                text="POST"
                className="btn btn-primary mx-4"
              />
              <Button
                click={testError}
                text="Test Error"
                className="btn btn-danger"
              />
            </div>
          </div>
          {postFormVisible && (
            <div className="row g-3 mb-4">
              <div className="col-lg-12">
                <Form
                  title={title}
                  body={body}
                  userId={userId}
                  setTitle={setTitle}
                  setBody={setBody}
                  setUserId={setUserId}
                  postSomeJson={postSomeJson}
                />
              </div>
            </div>
          )}
          {errorMessage && (
            <div className="row my-4">
              <div className="col-lg-12">
                <div className="alert alert-danger m-0" role="alert">
                  {errorMessage}
                </div>
              </div>
            </div>
          )}
        </div>
        {response && (
          <div className="col-lg-6">
            {loading ? <LoadingSpinner color="white" /> : <pre>{response}</pre>}
          </div>
        )}
      </div>
    </Layout>
  );
}
