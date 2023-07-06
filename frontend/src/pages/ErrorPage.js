import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";
import Navigation from "../components/Navigation";

const Error = () => {
  const error = useRouteError();
  let title = "An error occurred.";
  let message = "Something went wrong.";

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Not found.";
    message = "Could not find page.";
  }

  return (
    <>
      <Navigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
};

export default Error;
