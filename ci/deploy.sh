#!/bin/bash

set -ev

yarn build
firebase deploy --project $FIREBASE_APP --token $FIREBASE_TOKEN --non-interactive

exit 0
