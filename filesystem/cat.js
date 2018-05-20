#!/usr/bin/env node

// because the first line starts with#! you can execute this progrma directly
//  in Unix like systems

//  Use chmod to make it executable

//  $ chmod +x cat.js 

// To run it send the name of chosen file as additional argument

// $ ./cat.js target.txt 

'use strict';
require('fs').createReadStream(process.argv[2]).pipe(process.stdout);