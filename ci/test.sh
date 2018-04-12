#!/bin/bash

set -ev

ng lint
ng test --single-run --code-coverage
ng e2e

exit 0
