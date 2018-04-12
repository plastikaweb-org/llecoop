#!/bin/bash

set -ev

ng build --prod --aot --build-optimizer
firebase deploy --project $FIREBASE_APP --token $FIREBASE_TOKEN --non-interactive

exit 0
