#!/bin/bash

set -ev

# Setup Firebase config
cat src/conf/firebase.config.ts.sample \
    | sed "s/FIREBASE-APP-API-KEY/${FIREBASE_APP_API_KEY}/g" \
    | sed "s/FIREBASE-APP/${FIREBASE_APP}/g" \
    | sed "s/FIREBASE-APP-MESSAGING-SENDER-ID/${FIREBASE_APP_MESSAGING_SENDER_ID}/g" \
    | tee src/conf/firebase.config.ts &>/dev/null

exit 0
