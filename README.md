# Nylon
A simple, leightweight, user friendly proxy site.


[![Run on Replit](https://raw.githubusercontent.com/BinBashBanana/deploy-buttons/master/buttons/remade/replit.svg)](https://replit.com/github/zdc54/nylon)
[![Remix on Glitch](https://raw.githubusercontent.com/BinBashBanana/deploy-buttons/master/buttons/remade/glitch.svg)](https://glitch.com/edit/#!/import/github/zdc54/nylon)
# Repl.it Setup Guide

In order to setup Nylon, you need these 3 proxies:
[Womginx] (https://github.com/binary-person/womginx)
[Palladium] (https://github.com/LudicrousDevelopment/Palladium)
[Alloy] (https://github.com/titaniunetwork-dev/alloy)

1. If you have no money, go ahead and use [Repl.it.] (https://replit.com)
First, go ahead and go to the proxy URLs listed above, and look in the readme.md for the "Deploy to Replit" button.
make sure you name them accordingly and memorably.

2. Next, go into `/pages/`, and look for `womginx.html`, `alloy.html`, `palladium.html`.
Go ahead and enter the links for each proxy inside of the url placeholder box.
Now go ahead and make a new HTML Repl.
Once you are in, go to console, and type this:
`git clone https://github.com/BinBashBanana/gfiles`.
Drag the files from the gfiles folder (This might lag. If the files dissapear after dragging them to the root of the project, just reload. this is a common bug.)

3. If you want the proxy sites to look good, then go ahead and change their background colors to #383838 in the main CSS file.
Once you finish setting up gFiles, go ahead and embed that in `games.html` in the `/pages/` directory.

Now once you did all that, go ahead and run Nylon by typing:
``npm install
  node server.js``

# Explanation for Beginners With External Proxies and Real Hosting
You will first want to host your proxies locally or externally.

List of some good hosting options:
Dedipath (Paid and Dedicated)
NodeClusters (Paid)
Glitch (Free)
Repl.it (Free)
Azure (Free and Paid)
Out of the list of hosting providers Repl.it and NodeClusters rank first as a preference. You may also self-host.

After you have selected a decent VPS, use Cloudflare for the DNS records for both the site and the subdomains for the proxies.

Step 2 in the Repl.it setup guide also applies to this. You can use pm2 to run the proxies more efficently.

Freenom/Domain Steps
For beginners, Freenom is a good provider for obtaining domains for free. However the catch is that you can only use properly "Freenom" domains for free being .cf, .ml, .gq, ga and .tk. However these can be blocked rather easily.

Get some Freenom domains then add them to your instance.
If you prefer to obtain premium domains (TLDs) then use Porkbun, which offers domains for amazing prices. Literally a .net domain normally costs around $10. On Porkbun for the first year it costs $3 so its definitely a deal.
Cloudflare Steps
Use Cloudflare (make an account), add your site (Freenom Domain or other) and then add your various DNS targets to Cloudflare. Make sure you add Cloudflare's Nameservers which will be given later when you are adding your site.
Make sure they are CNAME although A records also work and try to follow this structure:

Type | Name | Target

CNAME | @ | your-target-here.com
CNAME | www | your-target-here.com



Workspace Configurations
Preferably if you have your own device use Visual Studio Code. Pretty much the best option you can get but obviously this is an opinion. Also make sure you have Node.JS installed on your machine.

Not going to go too in depth with this part but first fork this repository. The clone it locally through a Terminal of some sort depending on what OS you are on. Make sure you navigate to the folder you want to set this up in.
`
git clone https://github.com/zdc54/nylon.git

cd Nylon

npm install

node server.js
`
Now simply add the folder you cloned this repo in in VSC. Then run npm install. I recommend that if you are releasing this publically on GitHub that you add a .gitignore in your root directory with the following exclusions:

node_modules
Now you have your following workspace environment setup. To deploy the following workspace you just created you will need to look up depending on your hosting provider.

For an online IDE that you can use on your school computer and/or chromebook use GitPod. Basically the equivalent of Visual Studio Code but with in-browser support.

Make an account: https://gitpod.io/
Fork this repo and enter in this URL to setup your workspace: https://gitpod.io#https://github.com/YourNameHere/Nylon/
Use the same steps above by running npm install in your repository and adding a .gitignore in your root directory specifying to exclude node_modules.
