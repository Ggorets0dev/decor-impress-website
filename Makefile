install:
	echo Installing general and backend [Express] dependencies started
	yarn install
	echo Installing general and backend [Express] dependencies completed
	echo Installing frontend [React] dependencies started
	cd client; yarn install
	echo Installing frontend [React] dependencies completed

build:
	echo Frontend [React] assembly started
	cd client; yarn build
	echo Frontend [React] assembly completed