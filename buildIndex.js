const fs = require('fs');

const exclude = ['almanac.md', 'readme.md', 'summary.md', 'buildindex.js', 'package.json', 'meta', '.git', 'countryindex.json'];

const countryIndex = [];

const readFile = (dir, file) => {
  const country = JSON.parse(fs.readFileSync(`${dir}/${file}`).toString());
  const currentCountry = {
    directory: dir,
    filename: file
  };

  currentCountry.country = (country.Government['Country name'] &&
    country.Government['Country name']['conventional short form']) ?
    country.Government['Country name']['conventional short form'].text : '';

  countryIndex.push(currentCountry);
};

const readDir = (dir) => {
  if (!exclude.includes(dir.toLowerCase())) {
    const continent = fs.readdirSync(dir);
    continent.forEach((country) => {
      readFile(dir, country);
    });
  }
};

const continents = fs.readdirSync('./');
continents.forEach((continent) => {
  readDir(continent);
});

fs.writeFileSync('countryIndex.json', JSON.stringify(countryIndex, null, 2));