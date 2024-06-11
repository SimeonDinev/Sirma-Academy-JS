function f(score, extracurricularActivities) {
  if (score >= 90) {
    console.log("Admitted");
  } else if (score >= 80 && score <= 89 && extracurricularActivities >= 2) {
    console.log("Admitted");
  } else {
    console.log("Not admitted");
  }
}

f(85, 3);
f(88, 1);
f(91, 0);
f(75, 12);
