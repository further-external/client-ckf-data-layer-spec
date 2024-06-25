# Conversation Complete

Fire when the candidate schedule a in-person meeting and then succesfully completes the Caregiver form.

## Request info
POST /mp/collect?api_secret=fKhnzB9URSqghrauTtjGMw&measurement_id=G-0KV060Y1BE HTTP/1.1   ##Using Staging properties values
HOST: www.google-analytics.com
Content-Type: application/json

##Payload

```js
{
  "client_id":"<client_id>",
  "timestamp_micros":"<timestamp_micros>",
      "events":[{
          "name":"conversation_complete",
          "detailed_event": "Conversation Complete",
          "params":
          {
            "session_id": "<session_id>",
            "engagement_time_msec": "<engagement_time_msec>",
            "job_data": [{
                "identifier": "<identifier>",
                "method": "<method>",
                "office_id": "<franchise_id>",
                "date_posted": "<date_posted>",
                "employment_type": "<employment_type>"
            }],
           "user_data": [{
               "sha256_first_name": "<hashed_user_first_name>",
               "sha256__last_name": "<hashed_user_last_name>",
               "sha256_user_email": "<hashed_user_email>",
               "sha256_user_phone_number": "<hashed_user_phone_number>",
               "sha256_street": "<hashed_street>",
               "sha256_city": "hashed_city",
               "sha256_region": "<hashed_region>",
               "sha256_postal_code": "<hashed_postal_code>",
               "sha256_country": "<hashed_country>"
            }]
          }
     }]
}
```

## Variable Definitions

|Field|Type|Required|Description|Example|Pattern|Min Length|Max Length|Minimum|Maximum|Multiple Of|
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|api_secret|string|required|The API secret for the property to send the event to.|fKhnzB9URSqghrauTtjGMw|
|measurement_id|string|required|The identifier for the data stream to send the event to.|G-0KV060Y1BE|
|client_id|string|required|The unique identifier for an instance of a web client.|1704286278|
|timestamp_micros|string|required|The timestamp of the event in microsonds|1713872747|
|session_id|string|required|The unique identifier for a given session.|1714677480|
|engagement_time_msec|string|required|The amount of time someone spends with application in the foreground.|11586|
|identifier|string|recommended|A unique machine-readible identifier whose purpose will vary by event, but generally is used to differentiate one "thing" (form, link, video) from another. See https://schema.org/identifier.|ckfi:56f9dd7d-80e6-445c-b638-4e1759789077|
|method|string|recommended|The method by which a user is applying|webform,phone,chat|
|office_id|string|optional|Set on all events that can be tied back to an office.|/ohio/springfield|
|date_posted|string|recommended|Publication date of an online listing. See https://schema.org/datePosted.|44594|
|employment_type|string|recommended|The type of job for the position.|Part Time/Full Time|
|description|string|recommended|A description of the item. See https://schema.org/description.|Here at Comfort Keepers of Atlanta, GA our expert caregivers provide a personalized in-home care experience for seniors and disabled individuals to remain independent and comfortable in their own homes. Comfort Keepers uses Interactive Caregiving to ensure our clients are receiving the best care possible.\n\nLearn more on how our Comfort Keepers In-home Caregivers are bringing comfort to home while providing companionship, respite care, and more.\n\nOur team is dedicated to caring for seniors and loved ones within their homes and ensuring their safety during everyday outings and errands.|
|sha256_first_name|string|required|The Hashed and encoded first name of the user.|916b1f01b7d7c08d6a19905fa9eea0fa34289ccf0c0b0e29d523fc57b78283cc|
|sha256_last_name|string|required|Hashed and encoded last name of the user.|10eb1eee807536048c3b55f44cc5fe82ae6ab3c4fa89226758a41d02bd53e5d2|
|sha256_email_address|string|required|Hashed and encoded email address of the user.|c90b8279a7042d9d6342bdf1d71699814111d8dc95b9e030e4dbb8d186b41a6f|
|sha256_street|string|required|Hashed and encoded street and number of the user.|d96546c4c670d8742647c66dd9ad232638cafe4ee10d711d4d45ad20f6b3c7fa|
|sha256_phone_number|string|required|Hashed and encoded phone number of the user.|048140ceb8abc7e186e47e3ae374d63897c85b19f710dd88e89a5394b2576f9d|
|sha256_street|string|required|Hashed and encoded street and number of the user.|c044f5159556b36e967305141d35bc10076a01f0b2f8339e85ba11785cff19c3|
|sha256_city|string|required|City for the address of the user.|c55ec4bbe9c7c1614204f286194b109010ca0680f41325ec1a82302a34b4f3f7|
|sha256_region|string|required|State or territory for the address of the user.|8e9e26c2ef86ecd02ba5c84da8a0859a39b4181b19f4c89312d6f1c1b78ccf15|
|sha256_postal_code|string|required|Postal code for the address of the user.|a187be7bb4885205afe3ba3b3ddc549693035523bcf9a48bdb10ce920200f15e|
|sha256_country|string|required|Country code for the address of the user.|aa5ab35a9174c2062b7f7697b33fafe5ce404cf5fecf6bfbbf0dc96ba0d90046|








