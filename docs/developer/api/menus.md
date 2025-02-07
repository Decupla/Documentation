# Menus

### Menu Data Fields
The following fields will be sent when requesting menus:

| Field    | Description |
| -------- | ----------- |
| id | The unique ID of the menu. |
| title | The title of the menu. |
| key | The unique key of the menu. |
| entries | An array of menu entries. Each entry is represented as a separate object. See the table below for the structure of a menu entry. |

### Entry Data Fields
Each menu entry is represented as a separate object with the following fields:

| Field    | Description |
| -------- | ----------- |
| entryID | The unique ID of the entry within the menu. |
| contentID | The unique ID of the content the menu entry refers to. |
| priority | Defines the order in which the entry are meant to appear in the menu. Entries with lower values are displayed first. For example, an entry with priority 1 is displayed first, while an entry with a higher priority (e.g., 8) appears later. Entries are sorted by priority by default. |
| title | The title of the menu entry, intended for display in the menu. |

<details>
  <summary>Show JSON structure example</summary>

  ```json
{
    "id": 1,
    "title": "Header Menu",
    "key": "header-menu",
    "entries": [
        {
            "entryID": 2,
            "contentID": 2,
            "priority": 1,
            "title": "Home"
        },
        {
            "entryID": 1,
            "contentID": 1,
            "priority": 2,
            "title": "About Us"
        }
    ]
}
  ```
</details>

You can get the can get the menus created in Decupla using the following entpoints:

```
/api/menus/all
```

This endpoint returns an array of all created menus.

```
/api/menus/:id
```

This endpoint returns a single menu based on the provided ID. If the menu is found, it responds with a single object and HTTP status `200 OK`. If no menu is found, it returns an error message with HTTP status `404 Not Found`.

```
/api/menus/:key
```

This endpoint returns a single menu based on the provided key. If the menu is found, it responds with a single object and HTTP status `200 OK`. If no menu is found, it returns an error message with HTTP status `404 Not Found`.