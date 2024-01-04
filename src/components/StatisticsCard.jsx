export default function StatisticsCard({ userData }) {
  return (
    <div
      id="statistics-container"
      className="col-span-4 my-8 grid grid-cols-3 rounded-lg bg-slate-300 px-5 py-6 text-white lg:col-span-5 lg:col-start-2 dark:bg-veryDarkBlue"
    >
      <div className="grid gap-2" id="repos">
        <h2 className="text-xs font-thin text-slate-900 dark:text-white/80">
          Repos
        </h2>
        <p className="text-base font-bold text-slate-900 dark:text-white/80">
          {userData.public_repos}
        </p>
      </div>
      <div className="grid gap-2" id="followers">
        <h2 className="text-xs font-thin text-slate-900 dark:text-white/80">
          Followers
        </h2>
        <p className="text-base font-bold text-slate-900 dark:text-white/80">
          {userData.followers}
        </p>
      </div>
      <div className="grid gap-2" id="following">
        <h2 className="text-xs font-thin text-slate-900 dark:text-white/80">
          Following
        </h2>
        <p className="text-base font-bold text-slate-900 dark:text-white/80">
          {userData.following}
        </p>
      </div>
    </div>
  );
}
