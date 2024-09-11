#!/usr/bin/env sh
# Do - The Simplest Build Tool on Earth.
# Documentation and examples see https://github.com/8gears/do

#set -e -u # -e "Automatic exit from bash shell script on error"  -u "Treat unset variables and parameters as errors"
set -u # with -e nvm doesn't seem to work correctly

# Make nvm available
. ~/.nvm/nvm.sh

install() {
  nvm install
  rm -rf node_modules
  npm i
}

build() {
  nvm use
  NODE_ENV=production npm run build
  NODE_ENV=production npm run build-storybook
}

dev() {
  nvm use
  npm run dev&
  npm run storybook&
  wait
}

lint() {
  nvm use
  npm run lint
}

"$@"

[ "$#" -gt 0 ] || printf "Usage:\n\t./do.sh %s\n" "($(compgen -A function | grep '^[^_]' | paste -sd '|' -))"
