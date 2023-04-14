#!/usr/bin/env node

/**
 * subsleuth
 * Subsleuth is a powerful subdomain bruteforcing for bug bounty hunters and penetration testers to discover subdomains and enhance their web security testing.
 *
 * @author karthikeyan V (karthithehacker) <https://karthithehacker.com>
 */

//lib and includes section 
const dns = require('dns');
var fs = require('fs');
const help = require('./help');

class subscan {
    constructor(domain,savepath) {
        function validateSubdomain(subdomain) {
        return new Promise((resolve, reject) => {
            dns.resolve(subdomain, (error, addresses) => {
            if (error) {
                if (error.code === 'ENOTFOUND') {
                // Subdomain does not exist
                resolve(false);
                } else {
                // Other error occurred
                reject(error);
                }
            } else {
                // Subdomain exists
                resolve(true);
            }
            });
        });
        }
            

        validateSubdomain(domain)
        .then((isValid) => {
            
            //console.log(isValid ? domain : "");
            if(isValid){
                console.log("\n🌏\x1b[32;1m[Valid-Domain] \x1b[37;1m====> \x1b[36;1m" +domain)
                if(savepath == null || savepath == true){
                        return;     
                        }
                else{
                    fs.appendFileSync(savepath, domain+"\n", function (err) {
                    if (err) throw err;
                            });
                            
                        }  
            }
            
            //console.log(isValid)
            
            
        })
        .catch((error) => {
            //console.error(`Error validating subdomain: ${error}`);
        });
    }
}
module.exports = {
    engine: subscan
}