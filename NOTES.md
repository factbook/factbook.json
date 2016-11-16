# Notes

## Data (Consistency) Issues

### South Sudan capital lat/long

@mn113 writes:

In od.json the coordinate string is missing a comma.

"Capital": { "name": { "text": "Juba" }, "geographic coordinates": { "text": "04 51 N 31 37 E" },
Should be "04 51 N, 31 37 E" to avoid problems down the line.
It's the only example of this kind I found in my use of the repo so far.
e.g. comma separator missing.

