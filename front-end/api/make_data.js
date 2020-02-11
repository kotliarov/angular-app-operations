const faker = require('faker');
const fs = require('fs')

function generateTests() {

  let tests = []

  for (let id=1; id <= 100; id++) {

    let accession = faker.random.word();
    let num_samples = faker.random.number();
    let ship_date = faker.date.future();
    let test_date= faker.date.future();
    let review_date= faker.date.future();
    let sample = 1;
    let lab = 2;
    let status = faker.random.word();
    let type = faker.random.word();
    let version = 1;

    tests.push({
      "id":  id,
      "accession": accession,
      "num_samples": num_samples,
      "ship_date": ship_date,
      "test_date": test_date,
      "review_date": review_date,
      "sample": sample,
      "lab": lab,
      "status": "progress",
      "type": "undefined",
      "version": 1
    });
  }

  return { "tests":  tests }
}

let dataObj = generateTests();

fs.writeFileSync('api/data.json', JSON.stringify(dataObj, null, '\t'));
