import {
  MapPinIcon,
  LinkIcon,
  BuildingOffice2Icon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/solid";

export default function AdditionalInfo({ userData }) {
  return (
    <div
      className="col-span-4 grid grid-cols-2 gap-2 lg:col-span-5 lg:col-start-2"
      id="additional-info"
    >
      {userData.location && (
        <div className="flex gap-2">
          <MapPinIcon className="size-4 text-slate-900 lg:size-5 dark:text-white" />
          <p className="text-xs text-slate-900 lg:text-sm dark:text-white/80">
            {userData.location}
          </p>
        </div>
      )}
      {userData.twitter_username && (
        <div className="flex gap-2">
          <ChatBubbleBottomCenterTextIcon className="size-4 text-slate-900 lg:size-5 dark:text-white" />
          <p className="text-xs text-slate-900 lg:text-sm dark:text-white/80">
            {userData.twitter_username}
          </p>
        </div>
      )}
      {userData.blog && (
        <div className="flex gap-2">
          <LinkIcon className="size-4 text-slate-900 lg:size-5 dark:text-white" />
          <p className="text-xs text-slate-900 hover:text-blue-600 lg:text-sm dark:text-white/80">
            <a href={userData.blog} target="_blank">
              {userData.blog}
            </a>
          </p>
        </div>
      )}
      {userData.company && (
        <div className="flex gap-2">
          <BuildingOffice2Icon className="size-4 text-slate-900 lg:size-5 dark:text-white" />
          <p className="text-xs text-slate-900 lg:text-sm dark:text-white/80">
            {userData.company}
          </p>
        </div>
      )}
    </div>
  );
}
