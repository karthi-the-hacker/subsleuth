#!/usr/bin/env node

/**
 * subsleuth
 * Subsleuth is a powerful subdomain bruteforcing for bug bounty hunters and penetration testers to discover subdomains and enhance their web security testing.
 *
 * @author karthikeyan V (karthithehacker) <https://karthithehacker.com>
 */

//lib and includes section 
const lineReader = require('line-reader');
const subsleuth = require('./subsleuth');
const help = require('./help');
help.helpintro();
class reader {
    constructor(dom,wordlist,savepath) {
         lineReader.eachLine(wordlist, (line, last) => {
            new subsleuth.engine(line+"."+dom,savepath)
        });
    }
}
module.exports = {
    fileread: reader
}