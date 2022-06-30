import { hot } from "react-hot-loader/root";
import React, { useState, useCallback } from "react";
import axios from "axios";
import { Container, Label, Input, Button } from "reactstrap";
import ErrorDisplay from "./Components/ErrorDisplay";

const App = () => {
  const [url, setUrl] = useState("");
  const [shortLinks, setShortLinks] = useState([]);
  const [detailLink, setDetailLink] = useState(null);
  const [accessEvents, setAccessEvents] = useState(null);
  const [displayError, setDisplayError] = useState(false);

  const createLink = useCallback(async () => {
    try {
      setDisplayError(false);

      const { data } = await axios.post("/short_link", { long_url: url });
      setShortLinks([...shortLinks, data]);
    } catch (error) {
      console.error(error);

      setDisplayError(true);
    }
  }, [shortLinks, url]);

  const getAccessEvents = useCallback(async (shortLink) => {
    try {
      setDetailLink(shortLink);
      const { data } = await axios.get(`${shortLink.short_url}+`);
      setAccessEvents(data);
    } catch (error) {
      console.log(error);

      setDisplayError(true);
    }
  }, []);

  return (
    <Container>
      {displayError && <ErrorDisplay />}

      <Label>Link Name</Label>
      <Input value={url} onChange={(e) => setUrl(e.target.value)} />
      <Button onClick={createLink}>Create Link</Button>
      {detailLink ? (
        <div>
          <Button
            onClick={() => {
              setDetailLink(null);
              setDisplayError(false);
            }}
            color="warning"
          >
            Back
          </Button>
          <div>Access Links:</div>
          <div>{JSON.stringify(accessEvents)}</div>
        </div>
      ) : (
        <>
          <div>Recent Links:</div>
          <ul>
            {shortLinks.map((l) => (
              <li>
                {`${l.long_url} - `}
                <a href={l.short_url} target="_blank" rel="noopener noreferrer">
                  {l.short_url}
                </a>
                {" - "}
                <Button onClick={() => getAccessEvents(l)} size="sm" outline>
                  Show Log
                </Button>
              </li>
            ))}
          </ul>
        </>
      )}
    </Container>
  );
};

export default hot(App);
