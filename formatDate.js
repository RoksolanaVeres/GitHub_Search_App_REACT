export default function formatDate(accountCreationDate) {
  let date = new Date(accountCreationDate);
  let unformattedDate = date.toDateString();
  let day = unformattedDate.slice(8, 10);
  let month = unformattedDate.slice(4, 7);
  let year = unformattedDate.slice(-4);
  let formattedDate = `${day} ${month} ${year}`;
  return formattedDate;
}
