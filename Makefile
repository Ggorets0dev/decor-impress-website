install:
	echo Installing general and backend [Express] dependencies started
	npm install
	echo Installing general and backend [Express] dependencies completed
	echo Installing frontend [React] dependencies started
	cd client; npm install
	echo Installing frontend [React] dependencies completed

build:
	echo Frontend [React] assembly started
	cd client; npm run build
	echo Frontend [React] assembly completed