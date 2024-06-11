class Ticket {
  constructor(destination, price, status) {
    this.destination = destination;
    this.price = Number(price);
    this.status = status;
  }
}

function solve(array, orderCriteria) {
  let ticketsList = [];

  for (let i = 0; i < array.length; i++) {
    const [destinationName, price, status] = array[i].split("|");
    const ticket = new Ticket(destinationName, price, status);
    ticketsList.push(ticket);
  }

  if (orderCriteria === "destination") {
    orderByDestination(ticketsList);
  } else if (orderCriteria === "price") {
    orderByPrice(ticketsList);
  } else if (orderCriteria === "status") {
    orderByStatus(ticketsList);
  }
  ticketsList.forEach((e) => {
    console.log(e);
  });
}

function orderByStatus(obj) {
  return obj.sort((a, b) => {
    const x = a.status.toLowerCase();
    const y = b.status.toLowerCase();
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }

    return 0;
  });
}

function orderByPrice(obj) {
  return obj.sort((a, b) => {
    return a.price - b.price;
  });
}

function orderByDestination(obj) {
  return obj.sort((a, b) => {
    const x = a.destination.toUpperCase();
    const y = b.destination.toUpperCase();

    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }

    return 0;
  });
}

solve(
  [
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
  ],
  "destination"
);

// solve(
//   [
//     "New York City|95.99|available",
//     "New York City|95.99|sold",
//     "Boston|126.20|departed",
//     "Philadelphia|94.20|available",
//   ],
//   "status"
// );
