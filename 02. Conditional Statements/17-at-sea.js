function f(days, roomType, assessment) {
  const singleRoomPerNight = 25;
  const apartmentPerNight = 50;
  const presidentialPerNight = 100;

  let totalPrice;

  switch (roomType) {
    case "single room":
      totalPrice = singleRoomPerNight * (days - 1);
      break;
    case "apartment":
      totalPrice = apartmentPerNight * (days - 1);

      if (days < 10) {
        totalPrice -= totalPrice * 0.3;
      } else if (days <= 15) {
        totalPrice -= totalPrice * 0.35;
      } else {
        totalPrice -= totalPrice * 0.5;
      }
      break;
    case "president apartment":
      totalPrice = presidentialPerNight * (days - 1);

      if (days < 10) {
        totalPrice -= totalPrice * 0.1;
      } else if (days <= 15) {
        totalPrice -= totalPrice * 0.15;
      } else {
        totalPrice -= totalPrice * 0.2;
      }
      break;
    // default:
    // consol.log("Error!")
    //   break;
  }

  if (assessment === "positive") {
    totalPrice += totalPrice * 0.25;
  } else {
    totalPrice -= totalPrice * 0.1;
  }

  console.log(totalPrice.toFixed(2));
}

f(11, "apartment", "positive");
f(30, "president apartment", "negative");
f(12, "single room", "positive");
f(2, "apartment", "positive");
