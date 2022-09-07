# Generate lead

Fire whenever a lead is generated from a user action. This could be through a form submission, chat session, or phone call.

## Javascript Code
```js
window.dataLayer = window.dataLayer || []; // Initialize the dataLayer variable to avoid JS errors
window.dataLayer.push({event_data: null}) // conditionally reset portions of DL 
window.dataLayer.push({
  "event": "generate_lead",
  "event_data": {
    "currency": "<currency>",
    "category": "<category>",
    "value": "<value>",
    franchise_id: '<franchise_id>'
  }
})
```

## Variable Definitions
|Field|Type|Required|Description|Example|Pattern|Min Length|Max Length|Minimum|Maximum|Multiple Of|
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|currency|string|recommended|The currency, in 3-letter ISO 4217 format. Multiple currencies per event is not supported. Each item within the items array should set the same currency.
|USD|
|category|string|recommended|A human-readible identifier whose purpose will vary by event, but generally is used to group things (forms, links, videos) into loose assocations based upon shared characteristics. If running low on custom dimensions, you may combine multiple categories together in this field, separated by greater than (>) or slash (/). See https://schema.org/category.|qualified|
|value|number|recommended|For the "purchase" event this is the total revenue after coupons, but before tax and shipping.|100|
|franchise_id|integer|optional|Set on all events that can be tied back to a franchise.|143, 576, 1134|
