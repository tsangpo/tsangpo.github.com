.PHONY: init start build
.DEFAULT_GOAL:= start


init:
	npm init @vitejs/app tsangpo.net -- --template react-ts

start:
	npm run dev

build:
	rm -rf dist
	npm run build

preview:
	npm run serve

deploy:
	npx netlify deploy -p -s 04c3dd5f-e4de-44c0-86d3-7b9cb13b4b80 -d dist/ 
