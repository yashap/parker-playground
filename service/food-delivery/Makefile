.DEFAULT_GOAL:=help

GREEN  := $(shell tput -Txterm setaf 2)
YELLOW := $(shell tput -Txterm setaf 3)
WHITE  := $(shell tput -Txterm setaf 7)
RESET  := $(shell tput -Txterm sgr0)
TARGET_MAX_CHAR_NUM := 15

ROOT_DIR := $(shell dirname $(realpath $(firstword $(MAKEFILE_LIST))))

.PHONY: help
## Show this help
help:
	@printf 'Usage:\n  ${YELLOW}make${RESET} ${GREEN}<target>${RESET}\n\n'
	@printf 'Targets:\n'
	@awk '/^[a-zA-Z\-\_\/0-9]+:/ { \
		helpMessage = match(lastLine, /^## (.*)/); \
		if (helpMessage) { \
			helpCommand = substr($$1, 0, index($$1, ":")-1); \
			helpMessage = substr(lastLine, RSTART + 3, RLENGTH); \
			printf "  ${YELLOW}%-$(TARGET_MAX_CHAR_NUM)s${RESET} ${GREEN}%s${RESET}\n", helpCommand, helpMessage; \
		} \
	} \
	{ lastLine = $$0 }' $(MAKEFILE_LIST)

.PHONY: debug
## Print internal Makefile variables
debug:
	@echo ROOT_DIR=$(ROOT_DIR)

.PHONY: clean
## Clean the build (normally followed by `make install`)
clean:
	yarn cache clean

.PHONY: install
## Install all dependencies
install:
	yarn install

.PHONY: purge
## Try purging everything when your build is really broken
purge: clean
	rm -f yarn.lock
	rm -rf node_modules/
	$(MAKE) install

.PHONY: format
## Format code
format:
	yarn prettier --write .

.PHONY: check-format
## Check code formatting
check-format:
	yarn prettier --check .

.PHONY: run
## Run the Food Delivery Service
run:
	yarn start

.PHONY: ngrok
## Run ngrok to expose the Food Delivery Service (must be running `make run` in another shell)
ngrok:
	ngrok http 5000

.PHONY: test
## Run the tests
test:
	yarn test --watchAll
