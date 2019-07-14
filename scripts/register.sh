#!/bin/bash
url="http://localhost:8080/api/user/register"

curl -X POST --header "Content-Type: application/json" --header "Accept: application/json" -d "{
  \"accountId\": \"admin\",
  \"pswd\": \"123456\",
  \"age\": 8,
  \"firstName\": \"Ted\",
  \"lastName\": \"Wei\"
}" $url


curl -X POST --header "Content-Type: application/json" --header "Accept: application/json" -d "{
  \"accountId\": \"albert\",
  \"pswd\": \"testtest\",
  \"age\": 18,
  \"firstName\": \"Albert\",
  \"lastName\": \"Chang\"
}" $url

curl -X POST --header "Content-Type: application/json" --header "Accept: application/json" -d "{
  \"accountId\": \"anna\",
  \"pswd\": \"testtest\",
  \"age\": 21,
  \"firstName\": \"Anna\",
  \"lastName\": \"Cheng\"
}" $url

curl -X POST --header "Content-Type: application/json" --header "Accept: application/json" -d "{
  \"accountId\": \"chris\",
  \"pswd\": \"testtest\",
  \"age\": 28,
  \"firstName\": \"Chris\",
  \"lastName\": \"Wei\"
}" $url

curl -X POST --header "Content-Type: application/json" --header "Accept: application/json" -d "{
  \"accountId\": \"doris\",
  \"pswd\": \"testtest\",
  \"age\": 22,
  \"firstName\": \"Doris\",
  \"lastName\": \"Chang\"
}" $url

curl -X POST --header "Content-Type: application/json" --header "Accept: application/json" -d "{
  \"accountId\": \"emily\",
  \"pswd\": \"testtest\",
  \"age\": 44,
  \"firstName\": \"Emily\",
  \"lastName\": \"Cheng\"
}" $url
