# Install general, backend and frontend dependencies
install:
	@echo Installing --general-- and --backend-- dependencies is started
	yarn install
	@echo Installing --general-- and --backend--  dependencies is completed
	@echo Installing --frontend-- dependencies is started
	cd client; yarn install
	@echo Installing --frontend--  dependencies is completed

# Create an optimized frontend build
build:
	@echo Frontend [React] assembly is started
	cd client; yarn build
	@echo Frontend [React] assembly is completed

# Archive all code for transfer
archive:
	@echo Archiving the transport application is started
	tar --exclude='./.git' --exclude='./node_modules' --exclude='./logs' --exclude='./decor-impress-code.tar' --exclude='./.gitignore' --exclude='./client/build' -cvf decor-impress-code.tar .
	@echo Archiving the transport application is completed

# Delete frontend build, logs and dependencies
reset:
	@echo Temporary files cleaning is started
	if [ -d "./logs" ]; then \
		rm -rf logs; \
	fi
	if [ -d "./node_modules" ]; then \
		rm -rf node_modules; \
	fi
	cd client; \
	if [ -d "./node_modules" ]; then \
		rm -rf node_modules; \
	fi; \
	if [ -d "./build" ]; then \
		rm -rf build; \
	fi;
	@echo Temporary files cleaning is completed