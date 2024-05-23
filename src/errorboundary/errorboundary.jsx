//import { useRouteError } from "react-router-dom";

function ErrorBoundary() {
  //const error = useRouteError();
  //console.error(error);

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
       404
      </p>
    </div>
  );
}

export default ErrorBoundary;
