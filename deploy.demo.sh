#!/usr/bin/env sh

# abort on errors
# set -e

# build
# npm run build:demo

# navigate into the build output directory
cd demo

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/menteora/vuetify-extra.git master:gh-pages

cd -