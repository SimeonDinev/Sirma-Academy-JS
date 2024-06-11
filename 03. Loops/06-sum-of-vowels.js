function solve(word) {
  let vowels = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  let sum = 0;

  for (let i = 0; i < word.length; i++) {
    const element = word[i];
    //also we can do it with switch or if statement

    for (const [key, value] of Object.entries(vowels)) {
      if (key === element) {
        sum += value;
      }
    }
  }
  console.log(sum);
}

solve("hello");
solve("hi");
solve("bye");
solve("zzzz");
