---
description: The EntryListOptions type defines several parameters for ordering, sorting, filtering, and paging lists.
---

# EntryListOptions

The EntryListOptions type defines several parameters for ordering, sorting, and paging lists.

## Properties

| Name | Type | Description |
| :--- | :--- | :---------- |
| ContentTypeId | `string` | The content type identifier to list entries by. |
| Fields | `stringArray` | The list of fields to return in the entries. |
| Language | `string` | The language of entries to limit the listing to. |
| LinkDepth | `int` | The depth to resolve linked entries to.|
| Order | `stringArray` | A list of fields to re-order the listing by. |
| PageOptions | [PageOptions](/model/pageoptions.md) | The paging options for the listing. |
| PageSize | `int` | The number of items to return. |
