STORAGE_GAME=game-data
STORAGE_USER=user-data
STORAGE=storage

all: create-dirs submodule run-compose

run-compose:
	docker compose up

create-dirs:
	mkdir -p $(STORAGE)
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