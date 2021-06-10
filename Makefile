
start:
	npx parcel serve ./src/cv/index.html --dist-dir dist/cv

build:
	rm -rf dist
	cp -r public dist
	npx parcel build ./src/cv/index.html --dist-dir dist/cv --public-url ./
