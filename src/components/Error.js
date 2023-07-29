import React from "react";
import { useRouteError } from "react-router-dom";

function Error() {
  const route = useRouteError();
  return (
    <h2>
      {route.status} : {route.statusText}
    </h2>
  );
}

export default Error;
