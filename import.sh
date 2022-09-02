#!/bin/bash

function import_region {
  for file in `pwd`/$1/*.json
  do
    echo "  importing >${file}"
    mongoimport --db world --collection factbook --file ${file}
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

echo "Finished"
