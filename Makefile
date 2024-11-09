STORAGE_GAME=storage/game-data
STORAGE_USER=storage/user-data

build: create-dirs submodule

all: run-compose

run-compose:
	docker compose up

create-dirs:
	mkdir -p $(STORAGE_GAME)
	mkdir -p $(STORAGE_USER)

venv:
	cd src
	python3 -m venv core
	source core/bin/activate
	pip install django

submodule:
	git submodule init
	git submodule update