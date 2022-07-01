import React from "react";
import { Button } from "reactstrap";

export default function AccessEvents({
  setDetailLink,
  accessEvents,
  setDisplayError,
}) {
  return (
    <>
      <div>
        <div
          style={{
            margin: ".8rem 0 1.6rem 0",
            fontFamily: "Roboto, sans-serif",
            fontSize: "2.4rem",
            borderBottom: ".2rem solid #ffa100",
            fontWeight: "lighter",
          }}
        >
          Access Links:
        </div>
        <Button
          onClick={() => {
            setDetailLink(null);
            setDisplayError(false);
          }}
          color="warning"
          style={{
            fontFamily: "Roboto, sans-serif",
          }}
        >
          Back
        </Button>
        {accessEvents && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              backgroundColor: "#efefef",
              padding: "1.6rem",
              margin: "1.6rem 0 1.6rem 0",
            }}
          >
            <ul style={{ listStyleType: "none", margin: "0", padding: "0" }}>
              {accessEvents.map((link, index) => {
                return (
                  <li key={`accessEvent-${index}`}>
                    <div
                      style={{
                        margin: ".4rem",
                        fontFamily: "Roboto, sans-serif",
                        fontWeight: "bold",
                      }}
                    >{`ACCESS EVENT: ${index + 1}`}</div>
                    <div
                      style={{
                        border: ".2rem solid #2574db",
                        borderRadius: ".8rem",
                        padding: ".8rem",
                        margin: ".4rem",
                        fontFamily: "Roboto, sans-serif",
                        fontWeight: "lighter",
                        backgroundColor: "white",
                      }}
                    >
                      {`TIME: ${link.time}`}
                      <br />
                      {`REFERRER: ${link.referrer}`}
                      <br />
                      {`USER AGENT: ${link.user_agent}`}
                      <br />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
