#!/bin/bash

set -ev

yarn lint
yarn test:coverage
yarn e2e

exit 0
