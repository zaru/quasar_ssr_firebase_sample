#!/usr/bin/env bash

quasar build -m ssr
rm -rf ./functions/dist/package.json
firebase deploy
