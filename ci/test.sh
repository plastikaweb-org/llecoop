#!/bin/bash

set -ev

ng lint
ng test --code-coverage --watch false
ng e2e

exit 0
