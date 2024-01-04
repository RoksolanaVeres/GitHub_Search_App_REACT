import formatDate from "../../formatDate";
import StatisticsCard from "./StatisticsCard";
import AdditionalInfo from "./AdditionalInfo";

export default function ResultsCard({ userData }) {
  return (
    <div
      id="card-contaiter--main"
      className="rounded-lg bg-slate-200 dark:bg-darkBlue"
    >
      <div className="grid grid-cols-4 p-5  lg:p-10" id="card-contaiter--grid">
        <img
          src={userData.avatar_url}
          alt="user's profile picture"
          className="size-[75px] rounded-full md:mx-auto md:size-[100px] lg:mx-0 lg:size-[120px]"
        />

        <div
          id="card-header-text"
          className="col-span-3 grid pl-5 lg:col-span-5 lg:grid-cols-2 lg:pl-0"
        >
          <div className="flex flex-col gap-2 text-sm font-bold text-slate-900 lg:text-base dark:text-white">
            {userData.name}
            <a
              href={userData.html_url}
              target="_blank"
              className="text-xs
              text-blue-600
              lg:order-3
              lg:text-sm"
            >
              @{userData.login}
            </a>
          </div>

          <div className="flex text-xs font-thin text-slate-900 lg:order-2 lg:justify-end lg:text-sm dark:text-white dark:text-white/80">
            Joined {formatDate(userData.created_at)}
          </div>
        </div>
        {userData.bio ? (
          <div className="col-span-4 pt-6 text-xs font-thin text-slate-900 lg:col-span-5 lg:col-start-2 lg:pt-0 lg:text-sm dark:text-white">
            {userData.bio}
          </div>
        ) : (
          <div className="col-span-4 pt-6 text-xs font-thin text-slate-700 lg:col-span-5 lg:col-start-2 lg:pt-0 lg:text-sm dark:text-white/50">
            This profile has no bio
          </div>
        )}
        <StatisticsCard userData={userData} />
        <AdditionalInfo userData={userData} />
      </div>
    </div>
  );
}
