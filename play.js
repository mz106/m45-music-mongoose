const x = "hi";

console.log(`${x} to you`);

const myObj = {
  myName: "michael",
  age: 39,
};

console.log(myObj.myName);

const firstKey = "animal";
const firstValue = "tiger";

const myDynamicObj = {
  [firstKey]: firstValue,
};

console.log(myDynamicObj.animal);
