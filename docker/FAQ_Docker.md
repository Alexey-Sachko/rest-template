#1. Сборка образа:
```
- docker build -t rest -f ./docker/Dockerfile .

```
#2. Запуск контейнера:
```
- docker run --name rest  --rm -p 8080:8080 rest

```