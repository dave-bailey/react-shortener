import React from "react";
import { Button } from "reactstrap";

export default function ShortLinkList({ getAccessEvents, shortLinks }) {
  return (
    <>
      <div
        style={{
          margin: "1.6rem 0 1.6rem 0",
          fontFamily: "Roboto, sans-serif",
          fontSize: "2.4rem",
          fontWeight: "lighter",
          borderBottom: ".2rem solid #ffa100",
          width: "100%",
        }}
      >
        Recent Links:
      </div>

      {shortLinks.length > 0 && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            backgroundColor: "#efefef",
            padding: "1.6rem",
            marginBottom: "1.6rem",
          }}
        >
          <ul style={{ listStyleType: "none", margin: "0", padding: "0" }}>
            {shortLinks.map((link, index) => (
              <li key={`shortLink-${index}`}>
                <div
                  style={{
                    margin: ".4rem",
                    fontFamily: "Roboto, sans-serif",
                    fontWeight: "bold",
                  }}
                >
                  {`Link: ${index + 1}`}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      border: ".2rem solid #2574db",
                      borderRadius: ".8rem",
                      padding: ".8rem",
                      margin: ".8rem 0 .8rem 0",
                      fontFamily: "Roboto, sans-serif",
                      fontWeight: "lighter",
                      backgroundColor: "white",
                    }}
                  >
                    {`${link.long_url}`}
                    <a
                      href={link.short_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.short_url}
                    </a>
                    <Button
                      style={{
                        margin: ".8rem 0 .8rem 0",
                        fontFamily: "Roboto, sans-serif",
                        fontWeight: "lighter",
                        width: "50%",
                      }}
                      onClick={() => {
                        getAccessEvents(link);
                      }}
                      size="sm"
                      outline
                    >
                      Show Log
                    </Button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
