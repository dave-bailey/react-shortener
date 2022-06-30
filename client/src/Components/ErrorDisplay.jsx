import React from "react";
import { Container } from "reactstrap";

export default function ErrorDisplay({}) {
  return (
    <>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            border: ".2rem solid red",
            borderRadius: ".8rem",
            width: "80%",
            padding: "1.6rem",
            backgroundColor: "#efefef",
            margin: "2.4rem 0 .8rem 0",
          }}
        >
          <h1
            style={{
              margin: "1.6rem 0 1.6rem 0",
              fontFamily: "Roboto, sans-serif",
              fontSize: "1.6rem",
              fontWeight: "lighter",
              borderBottom: ".2rem solid red",
              width: "100%",
            }}
          >
            Something went wrong.
          </h1>
          <div
            style={{ fontFamily: "Roboto, sans-serif", fontWeight: "lighter" }}
          >
            Please try again.
            <br />
            Still not working?
            <br />
            Contact Our Support Team: support@email.com
          </div>
        </div>
      </Container>
    </>
  );
}
