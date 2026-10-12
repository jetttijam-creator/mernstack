# Products API — Endpoint Table

| Verb   | Path                  | Status Code(s) | Purpose                     |
|--------|-----------------------|----------------|-----------------------------|
| GET    | /api/v1/products      | 200            | List all products           |
| GET    | /api/v1/products/:id  | 200, 404       | Get one product by id       |
| POST   | /api/v1/products      | 201, 400       | Create a product            |
| PUT    | /api/v1/products/:id  | 200, 400, 404  | Update a product by id      |
| DELETE | /api/v1/products/:id  | 204, 404       | Delete a product by id      |
