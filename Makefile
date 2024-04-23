# -*- mode:makefile; coding:utf-8 -*-
#
# install dependencies
#

all: dependency-install-darwin-linux dependency-pre-commit

dependency-install-darwin-linux:
	./ci/install-deps.sh

dependency-pre-commit:
	pre-commit install

# pre-commit for non-terraform repos
pre-commit-no-terraform:
	@echo "Running pre-commit hooks .."
	@pre-commit run --all-files

run-tests:
	npm test

clean-npm:
	rm -rf node_modules/ client/node_modules/
	rm -f package-lock.json client/package-lock.json
	npm install --save-dev
	cd client; npm install --save-dev
