#!/usr/bin/env sh
set -e 


git init 
git add .
git commit -m 'New Deployment'
git push -f git@github.com:ayoubgoumbark/Simulation.git master:gh-pages
