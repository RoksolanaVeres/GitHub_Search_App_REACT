import { Octokit } from "octokit";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import ResultsCard from "./components/ResultsCard";
import ErrorMessage from "./components/ErrorMessage";
import Instructions from "./components/Instructions";
const octokit = new Octokit();

export default function App() {
  const [user, setUser] = useState("");
  const [userData, setUserData] = useState(null);
  const [userNotFound, setUserNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getUser() {
      try {
        setLoading(true);
        const response = await octokit.request(`GET /users/${user}`);
        setUserData(response.data);
        setUserNotFound(false);
      } catch {
        setUserNotFound(true);
      } finally {
        setLoading(false);
      }
    }

    if (user !== "") {
      // debounce function
      const delayInput = setTimeout(() => {
        getUser();
        console.log("Request sent");
      }, 600);

      return () => {
        clearTimeout(delayInput);
      };
    }
  }, [user]);

  const onInput = (e) => {
    setUser(e.target.value);
  };

  const shouldShowInstructions = !userData;
  const shouldShowErrorMessage = userNotFound;
  const shouldShowResults = userData && !userNotFound && !loading;
  const shouldShowLoading = userData && loading;

  return (
    <div
      id="app-layout"
      className="flex min-h-dvh justify-center bg-slate-100 px-5 py-16 font-comfortaa md:p-14 lg:p-20 dark:bg-veryDarkBlue"
    >
      <div
        id="card-layout"
        className="flex w-full min-w-fit max-w-[700px] flex-col gap-6"
      >
        <Header />
        <Searchbar onInput={onInput} />

        {shouldShowInstructions && <Instructions />}
        {shouldShowErrorMessage && <ErrorMessage />}
        {shouldShowLoading && <div className="text-white">Loading...</div>}
        {shouldShowResults && <ResultsCard userData={userData} />}
      </div>
    </div>
  );
}
