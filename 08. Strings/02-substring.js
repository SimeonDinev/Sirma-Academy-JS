function solve(str, num1, num2) {
  const substring = str.substring(num1, num2 + 1);
  console.log(substring);
}

solve("ESentence", 1, 8);
solve("DropWord", 4, 7);
