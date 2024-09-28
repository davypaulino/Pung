all:
	@	echo Hello

venv:
	cd src
	python3 -m venv core
	source core/bin/activate
	pip install django

submodule:
	git submodule init
	git submodule update