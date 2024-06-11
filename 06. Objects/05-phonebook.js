function solve(array) {
  let register = {};

  for (let i = 0; i < array.length; i++) {
    let name = array[i].split(" ")[0];
    let phoneNumber = array[i].split(name + " ").join("");

    register[name] = phoneNumber;
  }
  for (const key in register) {
    console.log(key + " -> " + register[key]);
  }
}

solve(["Peter 0888 657 212", "Bob 0899 657 212", "Peter 123123"]);
solve(["Maria 123", "Samantha 456", "Nicole 789"]);
