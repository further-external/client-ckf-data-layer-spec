# View Search Results

Fire whenever a user views search results. This includes product searches, content searches, resource searches, etc. and does not require a search event to be fired prior to it.

## Javascript Code

```js
window.dataLayer = window.dataLayer || [];
dataLayer.push({ event_data: null });  // Clear the previous event_data object.
dataLayer.push({
  event: "view_search_results",
  event_data: {
    facets: "<refinements>",
    number_of_items: "<number_of_items>",
    search_term: "<search_term>",
    search_type: "<search_type>",
  }
});
```

## Variable Definitions

|Field|Type|Required|Description|Example|Pattern|Min Length|Max Length|Minimum|Maximum|Multiple Of|
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|facets|delimited string|recommended|A delimited string of key/value pairs representing the facets that were applied to this search|filter:value\~filter2:value2\~filter3:value3|
|number_of_items|integer|recommended|The total number of search results found|324|
|search_term|string|required|The final search term submitted after any correction has been performed|Atlanta|
|search_type|string|required|The type of search performed|franchise,job,global|
|location|string|required|For recruitment site, the zipcode service area the user searched for|
|location_type|string|optional|For recruitment site, the geographic region type searched for|zipcode, city, state, etc.|
