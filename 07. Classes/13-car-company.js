function solve(arr) {
  const carRegister = new Map();

  arr.forEach((e) => {
    const [carBrand, carModel, producedCars] = e.split(" | ");
    producedCount = Number(producedCars);

    if (!carRegister.has(carBrand)) {
      carRegister.set(carBrand, new Map());
    }

    const modelsMap = carRegister.get(carBrand);

    if (!modelsMap.has(carModel)) {
      modelsMap.set(carModel, producedCount);
    } else {
      modelsMap.set(carModel, modelsMap.get(carModel) + producedCount);
    }
  });

  carRegister.forEach((modelsMap, brand) => {
    console.log(brand);
    modelsMap.forEach((producedCount, model) => {
      console.log(`###${model} -> ${producedCount}`);
    });
  });
}

solve([
  "Audi | Q7 | 1000",
  "Audi | Q6 | 100",
  "BMW | X5 | 1000",
  "BMW | X6 | 100",
  "Citroen | C4 | 123",
  "Volga | GAZ-24 | 1000000",
  "Lada | Niva | 1000000",
  "Lada | Jigula | 1000000",
  "Citroen | C4 | 22",
  "Citroen | C5 | 10",
]);
