import React from "react";

const log = console.log;

function TSplayground() {
  // UNIONS & GENERICS //

  function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
      // Here: 'x' is 'string[]'
      console.log("Hello, " + x.join(" and "));
    } else {
      // Here: 'x' is 'string'
      console.log("Welcome lone traveler " + x);
    }
  }

  welcomePeople(["marvin", "jose", "hector"]);
  return <h1>playgroundTest</h1>;
}

export default TSplayground;
