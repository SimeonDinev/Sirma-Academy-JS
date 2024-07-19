function getFormvalue(event) {
  event.preventDefault();

  const fName = document.querySelector("input[name='fname']").value;
  const lName = document.querySelector("input[name='lname']").value;

  console.log(fName + " " + lName);
}
