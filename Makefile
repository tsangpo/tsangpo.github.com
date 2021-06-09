
start:
	npx parcel serve ./src/cv/index.html --dist-dir dist/cv

build:
	rm -rf ./dist/cv
	npx parcel build ./src/cv/index.html --dist-dir dist/cv --public-url ./
	cp ./src/index.html ./dist/
