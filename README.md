
# How to run

* `npm install`
* `npx prisma migrate dev --name init`
* `npx prisma generate`
* `npm run dev`


# Endpoints docs

### User

* `POST /api/users/register`
    - Body:
    ```json
    {
        "username": "string",
        "password": "string" // min: 4 chars
    }
    ```

* `POST /api/users/login`
    - Body:
    ```json
    {
        "username": "string",
        "password": "string"
    }
    ```

* `GET /api/users`
    - Returns a list of all users (id and username)

* `DELETE /api/users/:id`
    - Deletes a user by their ID


### Food
*  `POST /api/food`
    - Body:
    ```
    {
        text: string,
        calories: int,
        proteins: int,
        carbs: int,
        date: Datetime,
        userId: int
    }
    ```

* `GET /api/food?userId=:int:/from="DD/MM/YYYY"/to="DD/MM/YYYY"`

### Weight
*  `POST /api/weight`
    - Body:
    ```
    {
        value: int,
        date: Datetime,
        userId: int
    }
    ```

* `GET /api/weight?userId=:int:/from="DD/MM/YYYY"/to="DD/MM/YYYY"`

* `PUT /api/weight?id=:int:` // register id
    - Body:
    ```
    {
        value: int,
        date: Datetime,
        userId: int
    }
    ```

* `DELETE /api/weight?id=:int:&userId=:int:`




