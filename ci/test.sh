#!/bin/bash

set -ev

yarn run lint
yarn run test:coverage
yarn run e2e

exit 0
