import React from "react";
import { Label, Input, Button } from "reactstrap";

export default function CreateNewLink({ url, setUrl, createLink }) {
  return (
    <>
      <Label
        style={{
          margin: "1.6rem 0 1.6rem 0",
          fontFamily: "Roboto, sans-serif",
          fontSize: "2.4rem",
          fontWeight: "lighter",
          borderBottom: ".2rem solid #ffa100",
          width: "100%",
        }}
      >
        Link Name:
      </Label>
      <Input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        type="url"
        placeholder="Enter URL"
      />
      <Button
        style={{
          margin: ".8rem 0 .8rem 0",
          fontFamily: "Roboto, sans-serif",
        }}
        onClick={createLink}
      >
        Create Link
      </Button>
    </>
  );
}
