## Requirement
- Finish two pages: Login / Users List, and one Card Component
- Use Vue, React or Angular to finish it
- Please don't use UI library. You don't need to put energy on how UI looks great

## Story
- Login Page with accountId, pswd
- If login success, redirect to Users List Page
- Users List Page should show all the user's info on default, which each user block is rendered by Card Component
- Users List Page should have a toggle button which can filter users with conditions as below
  - age >= 20 && age < 30 && length of full name >= 10

---
## Details

### Page1: Login
- Login API:
```
curl -X POST --header "Content-Type: application/json" --header "Accept: application/json" -d "{
  \"accountId\": \"admin\",
  \"pswd\": \"123456\"
}" "http://206.189.36.175:8080/api/user/login"
```
- if success, response will be:
```
{
  token: '{token}',
  message: 'You got the token!'
}
```
- all the other APIs should include token in Header:

### Page2: Users List
- Get Users List API:
```
curl -X GET --header "Accept: application/json" --header "Authorization: Bearer {token}"  "http://206.189.36.175:8080/api/users"
```
- This page should list all users with details (full name, age) on default, which are rendered by Card Component.
- This page should have a toggle button to let end user can filter users list with conditions as below:
  - age >= 20 && age < 30 && length of full name >= 10
  - EX: below is one of user data return from server, which full Name is "Anna Cheng". So the length of full name is 10
  ```
    {
      "accountId":"anna",
      "age":21,
      "firstName":"Anna",
      "lastName":"Cheng"
    }
  ```