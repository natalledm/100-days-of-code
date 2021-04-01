const animals = [
  ["horse", "cow"],
  ["dog", "cat"],
  ["fish", "whale"]
];

for (let i = 0; i < animals.length; i++){
  const row = animals[i];
  console.log(`Row #${i + 1}`)
  for (let j = 0; j < row.length; j++){
    console.log(row[j])
  }
}