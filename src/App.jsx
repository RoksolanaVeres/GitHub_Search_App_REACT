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

  useEffect(() => {
    if (user !== "") {
      async function getUser() {
        try {
          const response = await octokit.request(`GET /users/${user}`);
          setUserData(response.data);
          setUserNotFound(false);
        } catch {
          setUserNotFound(true);
        }
      }
      getUser();
    }
  }, [user]);

  return (
    <div
      id="app-layout"
      className="flex min-h-dvh justify-center bg-slate-100 px-5 py-16 font-comfortaa md:p-14 lg:p-20 dark:bg-veryDarkBlue"
    >
      <div
        id="card-layout"
        className="flex w-full max-w-[700px] flex-col gap-6 min-w-fit"
      >
        <Header />
        <Searchbar setUser={setUser} />

        {!userData && !userNotFound && <Instructions />}
        {userData && userNotFound && <ErrorMessage />}
        {userData && !userNotFound && <ResultsCard userData={userData} />}
      </div>
    </div>
  );
}
