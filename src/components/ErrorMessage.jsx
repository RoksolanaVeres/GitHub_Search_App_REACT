export default function ErrorMessage() {
  return (
    <div
      id="card-contaiter--main"
      className="rounded-lg bg-slate-200 dark:bg-darkBlue"
    >
      <div className="flex h-[200px] items-center justify-center text-red-600">
        <div className="text-center">
          <p> User with such name does not exist...</p>
          <p> Please, check the spelling!</p>
        </div>
      </div>
    </div>
  );
}
