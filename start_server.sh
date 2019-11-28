#!/usr/bin/env bash
export HOST=0.0.0.0
export PORT=80
export NODE_ENV=production
npm install --unsafe-perm
npm run build -- --no-lock
npm start
