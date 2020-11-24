# Notes

## F.A.Q

### Q: Why not just transform the country codes to ISO? Not a bug, a feature request

A:  The factbook has many more entities / countries than ISO and sometimes with a different definition - it's NOT an easy 1:1 mapping, see <https://www.cia.gov/library/publications/the-world-factbook/appendix/appendix-d.html>.

### Q: I noticed that you've got Zambian data under ZA for the African region... It should be South African data...

A:  See why not ISO codes -  Uhhh... nevermind, I see it's stored under SF. Weird, but, ok :)


## Data (Consistency) Issues

### South Sudan capital lat/long

@mn113 writes:

In od.json the coordinate string is missing a comma.

"Capital": { "name": { "text": "Juba" }, "geographic coordinates": { "text": "04 51 N 31 37 E" },
Should be "04 51 N, 31 37 E" to avoid problems down the line.
It's the only example of this kind I found in my use of the repo so far.
e.g. comma separator missing.


### Country Names - Curacao (cc), Sint Maarten (sk)

@mn113 writes:

A couple of countries in the dataset don't conform to a standard way to programmatically access their names. I think it's just Curacao (cc) and Sint Maarten (sk).

Every other country uses `["Government"]["Country name"]["conventional short form"]`.

I gather this is just a harvested dataset rather than a curated one, but how do you feel about this? If people want to use this data programatically, 
it's inconvenient that something as major as the _name_ of a country can't be reliably retrieved. (Other more complex properties, I can understand).

PS: European Union (ee) is another file which uses a different convention.
