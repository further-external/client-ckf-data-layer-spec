# Phone call start

Fire whenever a user starts a phone call using a provider like Invoca.

## Javascript Code

```js
window.dataLayer = window.dataLayer || [];
dataLayer.push({ event_data: null });  // Clear the previous event_data object.
dataLayer.push({
  event: 'phone_call_start',
  event_data: {
    "telephone": '<telephone>',
  }
});
```

## Variable Definitions

|Field|Type|Required|Description|Example|Pattern|Min Length|Max Length|Minimum|Maximum|Multiple Of|
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|telephone|string|recommended|The telephone number dialed|1234567890|