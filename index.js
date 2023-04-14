#!/usr/bin/env node

/**
 * subsleuth
 * Subsleuth is a powerful subdomain bruteforcing for bug bounty hunters and penetration testers to discover subdomains and enhance their web security testing.
 *
 * @author karthikeyan V (karthithehacker) <https://karthithehacker.com>
 */

//lib and includes section 

const help = require('./utils/help');
const fileread = require('./utils/filereader');
const rd = require('./utils/readdom');
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
//variable and object declariation section
const argv = yargs(hideBin(process.argv)).argv 
//variable and object declariation section

// used to check the argument parsed data is empty or not 
if( argv.h == true ){
    help.helpmenu();
    return; 
}
if(argv.w == null || argv.w == true ){
    if(argv.wordlist == null || argv.wordlist == true){
        help.helpintro();
        return; 
    }
}
//used to check for valid input data and syntax 
if(argv.l != null || argv.list != null){
     if(argv.list == true || argv.l == true){
        help.helpintro();
        return;
     }
     else{
        new rd.readoms(argv.l || argv.list,argv.w || argv.wordlist , argv.o || argv.output)
        return
     }
}
if(argv.d == null || argv.d == true ){
    if(argv.domain == null || argv.domain == true){
        help.helpintro();
        return; 
    }
}
if(argv.w == null || argv.w == true ){
    if(argv.wordlist == null || argv.wordlist == true){
        help.helpintro();
        return; 
    }
}
if(argv.l == null && argv.l == true ){
    console.log(argv.l)

    if(argv.list == null || argv.list == true){
       
        help.helpintro();
        return; 
    }
}



//program execution part and calling the constructor class 
new fileread.fileread(argv.d || argv.domain,argv.w || argv.wordlist ,argv.o || argv.output)


