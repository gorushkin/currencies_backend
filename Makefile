dev:
	npm run dev

build:
	docker build -t rate_tracker .

create:
	docker create --name api \
	--env-file ./.env \
	 api

start:
	docker container start api

destroy:
	docker stop api ; \
	docker rm api ; \

run: create start

update: build run

docker:
	docker-compose up --build
