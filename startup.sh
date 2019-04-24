#!/bin/bash
cd `dirname $0`

nohup ./consul.sh web-module /ui/module
nohup ./consul.sh docs /ui/docs

exec caddy --conf Caddyfile
