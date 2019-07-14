#!/bin/bash
url="http://localhost:8080/api/user/login"

curl -X POST --header "Content-Type: application/json" --header "Accept: application/json" -d "{
  \"accountId\": \"admin\",
  \"pswd\": \"123456\"
}" $url