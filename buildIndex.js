const fs = require('fs');

const exclude = ['almanac.md', 'readme.md', 'summary.md', 'buildindex.js',
'package.json', 'meta', '.git', 'countryindex.json', 'alternatecountryindex.json'];

const countryIndex = [];
const alternateIndex = {};

// Read files in sub directories and extract country information
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

  if (!alternateIndex[dir]) {
    alternateIndex[dir] = [];
  }

  alternateIndex[dir].push({
    filename: file,
    country: currentCountry.country
  });
};

// Find files in sub directories
const readDir = (dir) => {
  if (!exclude.includes(dir.toLowerCase())) {
    const continent = fs.readdirSync(dir);
    continent.forEach((country) => {
      readFile(dir, country);
    });
  }
};

// Read the directories in the root folder
const continents = fs.readdirSync('./');
continents.forEach((continent) => {
  readDir(continent);
});

// Create output files
fs.writeFileSync('countryIndex.json', JSON.stringify(countryIndex, null, 2));
fs.writeFileSync('alternateCountryIndex.json', JSON.stringify([alternateIndex], null, 2));