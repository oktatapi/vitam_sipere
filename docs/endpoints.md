# Endpoints

## Products

| Endpoint | Method | Auth | CRUD | Description |
| - | - | - | - | - |
| /products | GET | No | Read | Read all products |
| /products/:id | GET | No | Read | Read one products |
| /products | POST | No | Create | Create new products |
| /products/:id | PUT | No | Update | Update a products |
| /products/:id | DELETE | No | Delete | Delete a products |

### Get products

* GET /api/products

### Get one product

* GET /api/products/:id

### Create new product

* POST /api/products

Body:

```json
{
    "name": "C vitamin",
    "form": "por",
    "price": 1.5
}
```

### Delete one product

* DELETE /api/products
