import React from "react";
import { Spinner, Container } from "reactstrap";

export default function AccessEvents(props) {
  return (
    <>
      <Container
        style={{
          marginTop: "3.2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: ".2rem solid #2574db",
            borderRadius: ".8rem",
            width: "80%",
            padding: "1.6rem",
            backgroundColor: "#efefef",
          }}
        >
          <Spinner color="primary" type="border" />
          <h2
            style={{
              fontSize: "2.4rem",
              borderBottom: ".2rem solid #ffa100",
              marginLeft: "2rem",
              fontFamily: "Roboto, sans-serif",
              fontWeight: "lighter",
            }}
          >
            Loading
          </h2>
        </div>
      </Container>
    </>
  );
}
