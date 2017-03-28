
# Mongo


## Query Examples

###  Find all countries speaking _X_?

German

```js
db.factbook.find( { "People and Society.Languages.text": /German/}, { "Government.Country name": 1 } )
```

English

```js
db.factbook.find( { "People and Society.Languages.text": /English/}, { "Government.Country name": 1 } )
```

### Find all countries with a land border with _X_?

Austria

```js
db.factbook.find( { "Geography.Land boundaries.border countries.text": /Austria/}, 
                  { "Government.Country name": 1 } )
```

Germany

```js
db.factbook.find( { "Geography.Land boundaries.border countries.text": /Germany/}, 
                  { "Government.Country name": 1 } )
```


### Find all import partner countries for _X_?

Austria

```js
db.factbook.find( { "Economy.Imports - partners.text": /Austria/}, { "Government.Country name": 1 } )
```

### Find all countries with voting age 16 years

```js
db.factbook.find( { "Government.Suffrage.text": /16/}, 
                  { "Government.Country name": 1, "Government.Suffrage": 1 })
```


### Find all countries with _X_ membership?

NATO

```js
db.factbook.find( { "Government.International organization participation.text": /NATO/}, 
                  { "Government.Country name": 1 } )
```

And so on.

