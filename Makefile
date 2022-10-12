.PHONY: help install uninstall
.PHONY: run test

# PATH := $(HOME)/.deno/bin/deno:$(PATH)
DENO := $(HOME)/.deno/bin/deno

help:
	@cat $(firstword $(MAKEFILE_LIST))

install:
	@echo "Nothing to do with $@"

run:
	$(DENO) run src/main.ts

test:
	$(DENO) test test/main.test.ts

clean:
	@echo "Nothing to do with $@"
