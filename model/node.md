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
| DisplayName | `string` | The node display name |
| Path | `string` | The node path, e.g. "/movies/action/taken" |
| ParentId | `GUID?` | The parent node identifier. If the node is the root node then it will be _null_ |
| Language | `string` | The language the node represents |
| EntryId | `GUID?` | The optionally assigned entry identifier |
| ChildCount | `int` | The count of child nodes |
| IsCanonical | bool |  |
| Version     | `VersionInfo` | |

## Methods

| Method | Returns | Description |
| :----- | :------ | :-----------|
| [Children(IList<string> entryFields = null, entryLinkDepth = 0)](/model/node-methods.md#children) | `IReadOnlyList<Node>`| Gets a readonly list of the child nodes |
| [ChildrenAsync(IList<string> entryFields = null, entryLinkDepth = 0)](/model/node-methods.md#childrenasync) | `IReadOnlyList<Node>`| Gets a readonly list of the child nodes asynchronously |
| [Parent(IList<string> entryFields = null, entryLinkDepth = 0)](/model/node-methods.md#parent) | Node | Get the parent node. If the node is the root node then it will be `null` |
| [ParentAsync(IList<string> entryFields = null, entryLinkDepth = 0)](/model/node-methods.md#parentasync) | Node | Gets the parent node asynchronously. If the node is the root node then it will be `null` |
| [AncestorAtLevel(int level, IList<string> entryFields = null, entryLinkDepth = 0)](/model/node-methods.md#ancestoratlevel) | Node | Gets an ancestor node at the specified level
| [AncestorAtLevelAsync(int level, IList<string> entryFields = null, entryLinkDepth = 0)](/model/node-methods.md#ancestoratlevelasync) | Node | Gets an ancestor node at the specified level asynchronously |
| [Ancestors(int startLevel, IList<string> entryFields = null, entryLinkDepth = 0)](/model/node-methods.md#ancestors) | IReadonlyList&lt;Node&gt; | Gets a list of ancestor nodes |
| [AncestorsAsync(int startLevel, IList<string> entryFields = null, entryLinkDepth = 0)](/model/node-methods.md#ancestorsasync) | IReadonlyList&lt;Node&gt; | Gets a list of ancestor nodes asynchronously |
| [Siblings(IList<string> entryFields = null, entryLinkDepth = 0)](/model/node-methods.md#siblings) | IReadonlyList&lt;Node&gt; | Gets a list of sibling nodes including the current node |
| [SiblingsAsync(IList<string> entryFields = null, entryLinkDepth = 0)](/model/node-methods.md#siblingsasync) | IReadonlyList&lt;Node&gt; | Gets a list of sibling nodes including the current node |
| [Entry()](/model/node-methods.md#entry) | [Entry](/model/entry.md) | Gets the associated entry instance assigned to the node. |
| [EntryAsync()](/model/node-methods.md#entryasync) | [Entry](/model/entry.md) | Gets the associated entry instance assigned to the node asynchronously.  |
| [Entry&lt;T&gt;](/model/node-methods.md#entryt)  | [TypedModel](/key-concepts/typed-models.ms) of T | Gets the entry as a typed model |
| [EntryAsync&lt;TModel&gt;](/model/node-methods.md#entryasynct)  | [TypedModel](/key-concepts/typed-models.ms) of T | Gets the entry as a typed model asynchronously |
