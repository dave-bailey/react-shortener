import { hot } from "react-hot-loader/root";
import React, { useState, useCallback } from "react";
import axios from "axios";
import { Container, Label, Input, Button } from "reactstrap";
import ErrorDisplay from "./Components/ErrorDisplay";
import LoadingDisplay from "./Components/LoadingDisplay";
import AccessEvents from "./Components/AccessEvents.jsx";
import ShortLinkList from "./Components/ShortLinkList";

const App = () => {
  const [url, setUrl] = useState("");
  const [shortLinks, setShortLinks] = useState([]);
  const [detailLink, setDetailLink] = useState(null);
  const [accessEvents, setAccessEvents] = useState(null);
  const [displayError, setDisplayError] = useState(false);
  const [loading, setLoading] = useState(false);

  const createLink = useCallback(async () => {
    try {
      setDisplayError(false);
      setLoading(true);
      const { data } = await axios.post("/short_link", { long_url: url });
      setShortLinks([...shortLinks, data]);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
      setDisplayError(true);
    }
  }, [shortLinks, url]);

  const getAccessEvents = useCallback(async (shortLink) => {
    try {
      setDetailLink(shortLink);
      setLoading(true);
      const { data } = await axios.get(`${shortLink.short_url}+`);
      setAccessEvents(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setDisplayError(true);
    }
  }, []);

  return (
    <Container>
      {displayError && <ErrorDisplay />}

      {loading ? (
        <LoadingDisplay />
      ) : (
        <>
          <Label>Link Name</Label>
          <Input value={url} onChange={(e) => setUrl(e.target.value)} />
          <Button onClick={createLink}>Create Link</Button>
          {detailLink ? (
            <AccessEvents
              accessEvents={accessEvents}
              setDetailLink={setDetailLink}
              setDisplayError={setDisplayError}
            />
          ) : (
            <ShortLinkList
              shortLinks={shortLinks}
              getAccessEvents={getAccessEvents}
            />
          )}
        </>
      )}
    </Container>
  );
};

export default hot(App);
