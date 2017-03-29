
# Mongo

[Query Examples](#query-examples) •
[Import](#import)


## Query Examples

###  Find all countries speaking _X_?

German

```js
db.factbook.find( { "People and Society.Languages.text": /German/ } )
```

English

```js
db.factbook.find( { "People and Society.Languages.text": /English/ } )
```

### Find all countries with a land border with _X_?

Austria

```js
db.factbook.find( { "Geography.Land boundaries.border countries.text": /Austria/ } )
```

Germany

```js
db.factbook.find( { "Geography.Land boundaries.border countries.text": /Germany/ } )
```


### Find all import partner countries for _X_?

Austria

```js
db.factbook.find( { "Economy.Imports - partners.text": /Austria/ } )
```

### Find all countries with voting age 16 years

```js
db.factbook.find( { "Government.Suffrage.text": /16/ } )
```


### Find all countries with _X_ membership?

NATO

```js
db.factbook.find( { "Government.International organization participation.text": /NATO/ } )
```

Schengen Convention

```js
db.factbook.find( { "Government.International organization participation.text": /Schengen Convention/ } )
```

### Find all chief of states with name of _X_?

Elisabeth


### Find all countries with natural resources of _X_?

Gold


Diamonds


### Sort countries by proven known crude oil reserves?

World

Europe (only)

Middle East (only)


### Sort countries by beer consumption (drinking) per capita (person) in liters?



And so on.



## Import

Use the `mongoimport` command/tool to import the `factbook.json` documents.
For example, to import the country profile of Austria (that is, `europe/au.json`) use:

```
$ mongoimport --db world --collection factbook --file europe/au.json
```

To import all documents use a shell script. Example `import.sh`:

``` bash
#!/bin/bash

MONGOIMPORT = mongoimport
SOURCE      = .           # assume working folder (as root)

function import_file {
  echo "  importing >${1}<..."
  ${MONGOIMPORT} --db world --collection factbook --file ${1}
}

function import_region {
  for file in ${SOURCE}/$1/*.json
  do
    import_file ${file}
  done
}

import_region africa
import_region antarctica
import_region australia-oceania
import_region central-america-n-caribbean
import_region central-asia
import_region east-n-southeast-asia
import_region europe
import_region middle-east
import_region north-america
import_region oceans
import_region south-america
import_region south-asia
import_region world
```

To check up if all country profiles got imported use a query in the mongo shell e.g.:

```
> use world
  switched to db world
> db.factbook.count()
  261
```
