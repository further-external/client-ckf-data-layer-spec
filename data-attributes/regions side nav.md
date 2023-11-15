# Side Nav accordion expand and collapse. 

The data-layer-event attribute should be dynamically updated from collapse_accordion to expand_accordion whenever the accordion is expanded so this event will fire.

## HTML Data Attributes

```html
<a href="<href>" //Keep the original href attribute
  data-layer-event="expand_accordion" 
  data-layer-identifier="<identifier>" //The computer-readable machine name of the accordion. Use UUID provided by the component
  data-layer-section-name="<name>"//The name of the section. Ex: Filter Search Results
  data-layer-heading="<heading>" //The text heading of the accordion item that was opened/closed Ex. Category
  data-layer-index="<index>" //The ordinal slot number of the accordion item. E.g. - the top item in the accordion will be slot 1. (1-indexed)
  data-layer-type="<type>"//The type of accordion. Ex: regions_side_nav
></a>
```

## Variable Definitions

|Field|Type|Required|Description|Example|Pattern|Min Length|Max Length|Minimum|Maximum|Multiple Of|
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|component|string|required|The name of the component|Carousel:Wrapper|

