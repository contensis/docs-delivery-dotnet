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
| Path | `string` | The node path, e.g. "/movies/action/taken" |
| ParentId | `GUID?` | The parent node identifier. If the node is the root node then it will be _null_ |
| Language | `string` | The language the node represents |
| EntryId | `GUID?` | The optionally assigned entry identifier |
| ChildCount | `int` | The count of child nodes |

## Methods

| Method | Returns | Description |
| :----- | :------ | :-----------|
| [Children()](/model/node-methods.md#children) | `IReadOnlyList<Node>`| Gets a readonly list of the child nodes |
| [ChildrenAsync()](/model/node-methods.md#childrenasync) | `IReadOnlyList<Node>`| Gets a readonly list of the child nodes asynchronously |
| [Parent()](/model/node-methods.md#parent) | Node | Get the parent node. If the node is the root node then it will be `null` |
| [ParentAsync()](/model/node-methods.md#parentasync) | Node | Gets the parent node asynchronously. If the node is the root node then it will be `null` |
| [AncestorAtLevel(int level)](/model/node-methods.md#ancestoratlevel) | Node | Gets an ancestor node at the specified level
| [AncestorAtLevelAsync(int level)](/model/node-methods.md#ancestoratlevelasync) | Node | Gets an ancestor node at the specified level asynchronously |
| [Ancestors(int startLevel)](/model/node-methods.md#ancestors) | IReadonlyList&lt;Node&gt; | Get a list |
| Ancestors(int startLevel) | IReadonlyList&lt;Node&gt; |  |


| Entry() | [Entry](/model/entry.md) | The associated entry instance assigned to the node. Entry assignment is optional |
| EntryAsync() | [Entry](/model/entry.md) | The associated entry instance assigned to the node. Entry assignment is optional |
| Entry&lt;TModel&gt; | [TypedModel](/key-concepts/typed-models.ms) of TModel |  |
| EntryAsync&lt;TModel&gt; | [TypedModel](/key-concepts/typed-models.ms) of TModel |  |
