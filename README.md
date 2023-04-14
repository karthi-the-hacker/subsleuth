<p align="center">
<img src="https://github.com/karthi-the-hacker/subsleuth/raw/main/images/logo.gif" ><br>

</p>

> Subsleuth is a powerful subdomain bruteforcing for bug bounty hunters and penetration testers to discover subdomains and enhance their web security testing.

<p align="left"> <img src="https://komarev.com/ghpvc/?username=karthi-the-hacker&label=Profile%20views&color=0e75b6&style=flat" alt="karthi-the-hacker" /> </p>
<p align="left"> <a href="https://twitter.com/karthithehacker" target="blank"><img src="https://img.shields.io/twitter/follow/karthithehacker?logo=twitter&style=for-the-badge" alt="karthithehacker" /></a> </p>

## Prerequisites

- NodeJs

## Installation and Example

1. Install NodeJS [Instructions Here](https://nodejs.org/en/download/package-manager/) (If you can't figure this out, you shouldn't really be using this)

   - Linux, Mac, Windows
     - `npm install subsleuth -g`
   - Github
     - click [HERE](https://github.com/karthi-the-hacker/subsleuth.git) for downloads

2. Open terminal now type `subsleuth`

3. Example for signle domain
   - input
     - `subsleuth -d google.com -w wordlist.txt`
   - output
     - `subsleuth -d google.com -w wordlist.txt -o output.txt`

4. Example for multiple domains or to find subdomains of subdomains
   - input
     - `subsleuth -l domain-list.txt -w wordlist.txt`
   - output
     - `subsleuth -d domain-list.txt -w wordlist.txt -o output.txt`

#### Usages 📚 :

    $ subsleuth [option]

      Usage: subsleuth [options]

      Options:
        -h, --help     Show help
        -V, --version  Show version number
        -w, --wordlist  Customize wordlists
        -d, --domain    domains to find subdomains for 
        -o, --output    Save the results to text file
        -l, --list      file containing list of domains for subdomain discovery
