import styles from "./errorhandler.module.css"
function ErrorHandler() {
  return (
    <div className={styles["error-container"]}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>404</p>
    </div>
  );
}

export default ErrorHandler;
