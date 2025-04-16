V1.0

# How to run

* `npm install`
* `npx prisma migrate dev --name init`
* `npx prisma generate`
* `npm run dev`


# Endpoints docs

### User

* `POST /api/users/register` 
    - Body: 
    ```
    {
        username: string, 
        password: string | min: 4 chars
    }
    ```

* `POST /api/users/login` 
    
    - Body:
    ``` 
    {
        username: string, 
        password: string 
    }
     ```


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




