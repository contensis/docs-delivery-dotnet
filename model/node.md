---
description: The Location class represents a geographic coordinate that specifies the position of a point on the Earth's surface.
---

# Node

A Node represents a location within the navigational structure of a website. The linking of nodes as parent-child relationships forms the hierarchical structure of a website, with a node having a single parent and (optionally) multiple child nodes. A single entry can optionally be assigned to a node.

## Properties

| Name | Type | Description |
| :--- | :--- | :---------- |
| Id | `GUID` | The node identifier |
| ProjectId | `string` | The API identifer of the project the node belongs to |
| Title | `string` | The node title |
| Slug | `string` | The node slug |
| Path | `string` | The node path, e.g. "/movies/genres/action/taken" |
| ParentId | `GUID?` | The parent node identifier. If the node is the root node then it will be `null` |
| Language | `string` | The language the node represents |
| EntryId | `GUID?` | The entry identifier is |
| ChildCount | `int` | The count of child nodes. |
| Parent | Node | The node's parent node. This is a lazy-loaded object, so if only the parent node id is required then use 'ParentId'. If the node is the root node then it will be `null` |

## Methods

| Method | Returns | Description |
| :----- | :------ | :-----------|
| Children() | `IReadOnlyList<Node>`| Gets a readonly liststring |
| ChildrenAsync() | `IReadOnlyList<Node>`| A lazy-loaded readonly list of child nodes |
| ParentNodeAsync() | Node | The node's parent node. This is a lazy-loaded object, so if only the parent node id is required then use 'ParentId'. If the node is the root node then it will be `null` |
| Entry() | [Entry](/model/entry.md) | The associated entry instance assigned to the node. Entry assignment is optional |
| EntryAsync() | [Entry](/model/entry.md) | The associated entry instance assigned to the node. Entry assignment is optional |
| Entry&lt;TModel&gt; | [TypedModel](/key-concepts/typed-models.ms) of TModel |  |
| EntryAsync&lt;TModel&gt; | [TypedModel](/key-concepts/typed-models.ms) of TModel |  |

### Get Ancestor at depth

## Example

### Get a Location field object

```cs
@using Zengenti.Contensis.Delivery;

@{
    // Create an API client
    var client = ContensisClient.Create();

    // Retrieve a node by id, including it's children to a depth of 2
    var menuRoot = client.Nodes.GetById("2541a13c-b6a1-42d9-a3c8-99ea7d5b48c2", language: "fr-fr", depth: 2);
}

<div id="map">
    <img src="@imgUrl" />
</div>
```
