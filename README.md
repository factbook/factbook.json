#  `factbook.json` - World Factbook Country Profiles in JSON 

What's the World Factbook?

The World Factbook [1][2] published by the Central Intelligence Agency (CIA)
offers free country profiles in the public domain (that is, no copyright(s), no rights reserved, no license).

- [1] [The World Factbook](https://www.cia.gov/the-world-factbook/)
- [2] [Wikipedia Article: The World Factbook](http://en.wikipedia.org/wiki/The_World_Factbook)

**Note: All country profiles use the original / official two-letter GEC (formerly FIPS) codes and NOT the ISO codes (you
 might be used to) e.g. `au.json` for Austria (and NOT `at.json`), `gm.json` for Germany (and NOT `de.json`), and so on.** 



## Background

For a little background on this factbook project from the humble author, 
see the all-in-one page talk slides / notes titled [Turn the World Factbook into Open (Structured) Data](https://github.com/geraldb/talks/blob/master/factbook.md).

Find some more notes on [query examples (and import instructions) for MongoDB](MONGO.md) 
from another talk. Happy exploring the world with JavaScript Object Notation (JSON) datasets / documents.


## Frequently Asked Questions (F.A.Qs) & Answers

### Q: Thanks for this fantastic work!  Do you know any open source REST HTTP API for the World Factbook?

A:  Not sure I understand your question ;-).  factbook.json is a REST HTTP API for the World Factbook.   

For example, to request the country profile (data) for Germany (`gm`) using the REST HTTP API ( - no API key required ;-) - )  try <https://github.com/factbook/factbook.json/raw/master/europe/gm.json> and so on.



### Q: Why not just use the ISO country codes? Not a bug, a feature request.

A: The factbook has many more entities / countries than ISO and sometimes with a different definition - 
it's NOT an easy 1:1 mapping, see [Cross-Reference List of Country Data Codes](https://www.cia.gov/the-world-factbook/references/country-data-codes/).

### Q: I noticed that you've got Zambian data under ZA for the African region... It should be South African data...

A: See why not ISO codes -  Uhhh... nevermind, I see it's stored under SF. Weird, but, ok :)

### Q: Can you update the datasets? 

A: Since August 2021 the datasets get auto-updated using / fetching the original
online CIA World Factbook country profile datsets (cached in [`cache.factbook.json`](https://github.com/factbook/cache.factbook.json)) weekly, that is,
every Thursday. See the [GitHub Actions log](https://github.com/factbook/factbook/actions) for details.  


### Q: The World Factbook front-page says "for 266 world entities" - but here I find only 260 (thus, 6 entities short)? What's the story?

> The World Factbook provides basic intelligence on the history,
> people, government, economy, energy, geography, communications,
> transportation, military, terrorism, and transnational issues
> for 266 world entities.
>
> (Source: [`cia.gov/the-world-factbook`](https://www.cia.gov/the-world-factbook/))

A: Since March 2006
the United States Pacific Island Wildlife Refuges (`um`)
country profile consolidates
seven profiles into a single new one
(but keeps entities count as before):

- Baker Island  (`fq`)
- Howland Island (`hq`)
- Jarvis Island (`dq`)
- Johnston Atoll (`jq`)
- Kingman Reef (`kq`)
- Midway Islands (`mq`)
- Palmyra Atoll (`lq`)

### Q: What happened to the Western Sahara (`wi`) country profile?

A: In December 2020 the World Factbook dropped coverage of the Western Sahara (`wi`). Why?
In a deal with Morocco the United States recognizes the claim
of Marocco over the Western Sahara and in return
Morocco starts official diplomatic relations with Israel.

```
Code, Name,           Category,      Region
wi,   Western Sahara, Miscellaneous, Africa
```






## Examples

Europe/Austria - `au.json`: 

```json
{
  "Introduction": {
    "Background": {
      "text": "Once the center of power for the large Austro-Hungarian Empire,
               Austria was reduced to a small republic after its defeat in World War..."
    }
  },
  "Geography": {
    "Location": {
      "text": "Central Europe, north of Italy and Slovenia"
    },
    "Geographic coordinates": {
      "text": "47 20 N, 13 20 E"
    },
    "Map references": {
      "text": "Europe"
    },
    "Area": {
      "total": {
        "text": "83,871 sq km"
      },
      "land": {
        "text": "82,445 sq km"
      },
      "water": {
        "text": "1,426 sq km"
      }
    },
    "Area - comparative": {
      "text": "about the size of South Carolina...",
    },
    "Land boundaries": {
      "total": {
        "text": "2,524 km"
      },
      "border countries": {
        "text": "Czech Republic 402 km, Germany 801 km, Hungary 321 km, Italy 404 km,
                 Liechtenstein 34 km, Slovakia 105 km, Slovenia 299 km, Switzerland 158 km"
      }
    },
    "Climate": {
      "text": "temperate; continental, cloudy; cold winters with frequent rain and
               some snow in lowlands and snow in mountains;
               moderate summers with occasional showers"
    },
    "Elevation": {
      "lowest point": {
        "text": "Neusiedler See 115 m"
      },
      "highest point": {
        "text": "Grossglockner 3,798 m"
      }
    },
    "Natural resources": {
      "text": "oil, coal, lignite, timber, iron ore, copper, zinc, antimony,
               magnesite, tungsten, graphite, salt, hydropower"
    },
    ...
}
```


## The World Factbook Summary (~~266~~ 260 Entries)

The World Factbook includes ~~266~~ 260 entries -
195 sovereign countries /
2 others /
~~58~~ 52 dependencies /
5 miscellaneous /
5 oceans /
1 world:


### Sovereign Countries (195)

**A**
`af` Afghanistan
`al` Albania
`ag` Algeria
`an` Andorra
`ao` Angola
`ac` Antigua and Barbuda
`ar` Argentina
`am` Armenia
`as` Australia
`au` Austria
`aj` Azerbaijan
**B**
`bf` The Bahamas
`ba` Bahrain
`bg` Bangladesh
`bb` Barbados
`bo` Belarus
`be` Belgium
`bh` Belize
`bn` Benin
`bt` Bhutan
`bl` Bolivia
`bk` Bosnia and Herzegovina
`bc` Botswana
`br` Brazil
`bx` Brunei
`bu` Bulgaria
`uv` Burkina Faso
`bm` Burma
`by` Burundi
**C**
`cb` Cambodia
`cm` Cameroon
`ca` Canada
`cv` Cape Verde
`ct` Central African Republic
`cd` Chad
`ci` Chile
`ch` China
`co` Colombia
`cn` Comoros
`cg` Congo DR
`cf` Congo
`cs` Costa Rica
`iv` Cote d'Ivoire
`hr` Croatia
`cu` Cuba
`cy` Cyprus
`ez` Czechia
**D**
`da` Denmark
`dj` Djibouti
`do` Dominica
`dr` Dominican Republic
**E**
`ec` Ecuador
`eg` Egypt
`es` El Salvador
`ek` Equatorial Guinea
`er` Eritrea
`en` Estonia
`wz` Eswatini
`et` Ethiopia
**F**
`fj` Fiji
`fi` Finland
`fr` France
**G**
`gb` Gabon
`ga` The Gambia
`gg` Georgia
`gm` Germany
`gh` Ghana
`gr` Greece
`gj` Grenada
`gt` Guatemala
`gv` Guinea
`pu` Guinea-Bissau
`gy` Guyana
**H**
`ha` Haiti
`ho` Honduras
`hu` Hungary
**I**
`ic` Iceland
`in` India
`id` Indonesia
`ir` Iran
`iz` Iraq
`ei` Ireland
`is` Israel
`it` Italy
**J**
`jm` Jamaica
`ja` Japan
`jo` Jordan
**K**
`kz` Kazakhstan
`ke` Kenya
`kr` Kiribati
`kn` North Korea
`ks` South Korea
`kv` Kosovo
`ku` Kuwait
`kg` Kyrgyzstan
**L**
`la` Laos
`lg` Latvia
`le` Lebanon
`lt` Lesotho
`li` Liberia
`ly` Libya
`ls` Liechtenstein
`lh` Lithuania
`lu` Luxembourg
**M**
`ma` Madagascar
`mi` Malawi
`my` Malaysia
`mv` Maldives
`ml` Mali
`mt` Malta
`rm` Marshall Islands
`mr` Mauritania
`mp` Mauritius
`mx` Mexico
`fm` Micronesia
`md` Moldova
`mn` Monaco
`mg` Mongolia
`mj` Montenegro
`mo` Morocco
`mz` Mozambique
**N**
`wa` Namibia
`nr` Nauru
`np` Nepal
`nl` Netherlands
`nz` New Zealand
`nu` Nicaragua
`ng` Niger
`ni` Nigeria
`no` Norway
`mk` North Macedonia
**O**
`mu` Oman
**P**
`pk` Pakistan
`ps` Palau
`pm` Panama
`pp` Papua New Guinea
`pa` Paraguay
`pe` Peru
`rp` Philippines
`pl` Poland
`po` Portugal
**Q**
`qa` Qatar
**R**
`ro` Romania
`rs` Russia
`rw` Rwanda
**S**
`sc` Saint Kitts and Nevis
`st` Saint Lucia
`vc` Saint Vincent and the Grenadines
`ws` Samoa
`sm` San Marino
`tp` Sao Tome and Principe
`sa` Saudi Arabia
`sg` Senegal
`ri` Serbia
`se` Seychelles
`sl` Sierra Leone
`sn` Singapore
`lo` Slovakia
`si` Slovenia
`bp` Solomon Islands
`so` Somalia
`sf` South Africa
`od` South Sudan
`sp` Spain
`ce` Sri Lanka
`su` Sudan
`ns` Suriname
`sw` Sweden
`sz` Switzerland
`sy` Syria
**T**
`ti` Tajikistan
`tz` Tanzania
`th` Thailand
`tt` Timor-Leste
`to` Togo
`tn` Tonga
`td` Trinidad and Tobago
`ts` Tunisia
`tu` Turkey
`tx` Turkmenistan
`tv` Tuvalu
**U**
`ug` Uganda
`up` Ukraine
`ae` United Arab Emirates
`uk` United Kingdom
`us` United States
`uy` Uruguay
`uz` Uzbekistan
**V**
`nh` Vanuatu
`vt` Vatican City (Holy See)
`ve` Venezuela
`vm` Vietnam
**Y**
`ym` Yemen
**Z**
`za` Zambia
`zi` Zimbabwe


### Other (2)

`tw` Taiwan
`ee` European Union

### Dependencies (52)

Australia (6):
`at` Ashmore and Cartier Islands
`kt` Christmas Island
`ck` Cocos (Keeling) Islands
`cr` Coral Sea Islands
`hm` Heard Island and McDonald Islands
`nf` Norfolk Island

China (2):
`hk` Hong Kong
`mc` Macau

Denmark (2):
`fo` Faroe Islands
`gl` Greenland

France (8):
`ip` Clipperton Island
`fp` French Polynesia
`fs` French Southern and Antarctic Lands
`nc` New Caledonia
`tb` Saint Barthelemy
`rn` Saint Martin
`sb` Saint Pierre and Miquelon
`wf` Wallis and Futuna

Netherlands (3):
`aa` Aruba
`uc` Curacao
`nn` Sint Maarten

New Zealand (3):
`cw` Cook Islands
`ne` Niue
`tl` Tokelau

Norway (3):
`bv` Bouvet Island
`jn` Jan Mayen
`sv` Svalbard

United Kingdom (17):
`ax` Akrotiri (Sovereign Base)
`av` Anguilla
`bd` Bermuda
`io` British Indian Ocean Territory
`vi` British Virgin Islands
`cj` Cayman Islands
`dx` Dhekelia (Sovereign Base)
`fk` Falkland Islands
`gi` Gibraltar
`gk` Guernsey
`je` Jersey
`im` Isle of Man
`mh` Montserrat
`pc` Pitcairn Islands
`sh` Saint Helena
`sx` South Georgia and the South Sandwich Islands
`tk` Turks and Caicos Islands

United States (~~14~~ 8):
`aq` American Samoa
`gq` Guam
`bq` Navassa Island
`cq` Northern Mariana Islands
`rq` Puerto Rico
`vq` US Virgin Islands
`wq` Wake Island
`um` US Pacific Island Wildlife Refuges
(Baker Island, Howland Island, Jarvis Island, Johnston Atoll, Kingman Reef, Midway Islands, Palmyra Atoll)


### Miscellaneous (5)

`ay` Antarctica
`gz` Gaza Strip
`pf` Paracel Islands
`pg` Spratly Islands
`we` West Bank
~~`wi` Western Sahara~~

### Oceans (5)

`xq` Arctic Ocean
`zh` Atlantic Ocean
`xo` Indian Ocean
`zn` Pacific Ocean
`oo` Southern Ocean

### World (1)

`xx` World



## Build Your Own Up-to-Date Country Profiles

See the [`factbook`](https://github.com/factbook/factbook)
command line tool and scripts for details.




## Real-World Usage

Q: Anybody using these datasets?  I don't know really.  

Add your project here - yes, you can!




## License

![](https://publicdomainworks.github.io/buttons/zero88x31.png)

The datasets and scripts are dedicated to the public domain. Use it as you please with no restrictions whatsoever.


## Questions? Comments?

Send them along to the [Open World Database (world.db) and Friends Forum/Mailing List](http://groups.google.com/group/openmundi). 
Thanks!
