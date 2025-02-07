# Content

### Content Data Fields
The following fields will be sent when requesting content:

| Field    | Description |
| -------- | ----------- |
| id       | The unique ID of the content. |
| title    | The title of the content. |
| status   | The status of the content can have two possible values:<br />**0:** This means the content is a **draft**.<br />**1:** This means the content is **published**. |
| url | The url / slug of the content. It is recommended to use this URL for routing purposes. |
| description | The description of the content. |
| created | A timestamp indicating when the content was created. |
| updated | A timestamp indicating when the content was last updated. If the content has not been updated yet, it will be null. |
| blocks | An array of all block instances of the content. Each block instance is represented as a separate object. Please see the table below for the structure of a block instance.

### Block Data Fields
Each block instance will be represented as a separate object. Each of the objects will have the following fields:

| Field    | Description |
| -------- | ----------- |
| instanceID | The unique ID of the block instance. |
| blockID | The unique ID of the block which was used to create the instance. |
| blockKey | The unique key of the block which was used to create the instance.  It is recommended to use this key when assigning code components (e.g., JSX elements) to a block.
| priority | Defines the order in which block instances are meant to show up on a page / in a application. For example, an instance with priority 1 is meant to be displayed first, while an instance with the highest priority (e.g. 20) is meant to be displayed last. The block instances will be sorted based on their priority by default.
| output | Represents the output for this block instance as an object. Each key in the object corresponds to the title of an input field of the block. The associated value represents the value set for that input field.

<details>
  <summary>Show JSON structure example</summary>

  ```json
{
	"id": 2,
	"title": "About",
	"status": 1,
    "url": "/about/",
    "description": "This is the About page",
    "created": 1738523040167,
    "updated": null,
	"blocks": [
		{
			"instanceID": 23,
			"blockID": 1,
			"blockKey": "text",
			"priority": 1,
			"output": {
				"headline": "About Us",
				"text": "Lorem ipsum"
			}
		},
		{
			"instanceID": 24,
			"blockID": 2,
			"blockKey": "image",
			"priority": 2,
			"output": {
				"file": "team.png",
				"alt-text": "Our Team"
			}
		},
		{
			"instanceID": 25,
			"blockID": 1,
			"blockKey": "text",
			"priority": 3,
			"output": {
				"headline": "Meet our team!",
				"text": "Lorem ipsum"
			}
		}
	]
}
  ```
</details>

You can get the can get the content created in Decupla using the following entpoints:

```
/api/content/all
```

This endpoint returns an array of all created content.

```
/api/content/:id
```

This endpoint returns a single content based on the provided ID. If the content is found, it responds with a single object and HTTP status `200 OK`. If no content is found, it returns an error message with HTTP status `404 Not Found`.
