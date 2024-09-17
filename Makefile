export ENV_FILE=.env.production

# Check if the environment file exists
ifeq (,$(wildcard $(ENV_FILE)))
$(error $(ENV_FILE) does not exist)
endif

# Docker Compose command with environment file
DC := docker compose --env-file $(ENV_FILE)

# Start the containers
.PHONY: up
up:
	$(DC) up -d

# Build the containers
.PHONY: build
build:
	$(DC) build

# Stop and remove the containers
.PHONY: down
down:
	docker compose down

# View container logs
.PHONY: logs
logs:
	$(DC) logs -f

# Open a shell in the app container
.PHONY: shell
shell:
	$(DC) exec app sh

# Clean up Docker resources
.PHONY: clean
clean:
	docker system prune -f