# Deno REST API
> This is a simple REST API using Deno and Oak.

## Run
```
deno run --allow-net server.ts
```
### API Endpoints (localhost:5000/*)

Link to [Postman Collection](https://www.getpostman.com/collections/fc9fed4eb4b844627a7d)

## Routes
```
GET      /api/v1/products
GET      /api/v1/products/:id
POST     /api/v1/products
PUT      /api/v1/products/:id
DELETE   /api/v1/products/:id
```