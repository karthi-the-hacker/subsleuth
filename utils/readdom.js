#!/usr/bin/env node

/**
 * subsleuth
 * Subsleuth is a powerful subdomain bruteforcing for bug bounty hunters and penetration testers to discover subdomains and enhance their web security testing.
 *
 * @author karthikeyan V (karthithehacker) <https://karthithehacker.com>
 */

//lib and includes section 
const lineReader = require('line-reader');
const fl = require('./filereader');

class readomains {
    constructor(domlist,wordlist,savepath) {
         lineReader.eachLine(domlist, (domains, last) => {
            new fl.fileread(domains,wordlist,savepath)
           
        });
    }
}

module.exports = {
    readoms: readomains
}