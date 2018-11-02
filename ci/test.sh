#!/bin/bash

set -ev

ng lint
jest --coverage
ng e2e

exit 0
