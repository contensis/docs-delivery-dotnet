---
description: Requesting a node can be achieved by using one of the Get method overloads.
---
# Getting nodes

Requesting nodes can be achieved by using one of the `Get` methods.

- [GetRoot(string language, int depth](#get-root)
- [GetRootAsync(string language, int depth](#get-root-async)
- [GetById(Guid id, string language, int depth](#get-by-guid-id)
- [GetByIdAsync(Guid id, string language, int depth](#get-by-guid-id-async)
- [GetById(string id, string language, int depth](#get-by-string-id)
- [GetByIdAsync(string id, string language, int depth](#get-by-string-id-async)
- [GetByPath(string path, int depth](#get-by-path)
- [GetByPathAsync(string id, int depth](#get-by-path-async)
- [GetByEntryId(Guid entryId, string language](#get-by-guid-entry-id)
- [GetByEntryIdAsync(Guid entryId string language](#get-by-guid-entry-id-async)
- [GetByEntryId(string entryId, string language](#get-by-string-entry-id)
- [GetByEntryIdAsync(string entryId string language](#get-by-string-entry-id-async)

## Get root

Gets the root node of the tree.

### Syntax

```cs
public Node GetRoot(string language = null, int depth = 0)
{
}
```

### Parameters

*language*
> Type: `string`  
> The specified language for the node. If no value is provided then the project default language is used.

*depth*
> Type: `int`  
> The depth of decendants to include for the node, to a maximum overall depth of 9. The default is 0. This reduces calls to the HTTP service and improves performance.


### Examples

```cs
using Zengenti.Contensis.Delivery;

// Create a client
var client = ContensisClient.Create();

// Get the root node for the default language
Node rootNode = client.Nodes.GetRoot();
```

---

## Get root async

Gets the root node of the tree asynchronously.

### Syntax

```cs
public async Task<Node> GetRootAsync(string language = null, int depth = 0)
{
}
```

### Parameters

*language*
> Type: `string`  
> The specified language for the node. If no value is provided then the project default language is used.

*depth*
> Type: `int`  
> The depth of decendants to include for the node, to a maximum overall depth of 9. The default is 0. This reduces calls to the HTTP service and improves performance.

### Examples

```cs
using Zengenti.Contensis.Delivery;

// Create a client
var client = ContensisClient.Create();

// Get the French root node asynchronously
Node rootNode = await client.Nodes.GetRootAsync("fr-FR");
```

---

## Get by Guid id

Gets a node by its identifier as a `Guid`.

### Syntax

```cs
public Node GetById(Guid id, string language = null, int depth = 0)
{
}
```

### Parameters

*id*
> Type: `Guid`  
> The id of the node.

*language*
> Type: `string`  
> The specified language for the node. If no value is provided then the project default language is used.

*depth*
> Type: `int`  
> The depth of decendants to include for the node, to a maximum overall depth of 9. The default is 0. This reduces calls to the HTTP service and improves performance.

### Remarks

Returns *null* if a node with an id matching the specified id does not exist.

### Examples

```cs
using Zengenti.Contensis.Delivery;

// Create a client
var client = ContensisClient.Create();

// Get a specific German node by id, including descendants up to a depth of 3
Node navNode = client.Nodes.GetById(rootNavNodeId, language: "de", depth: 3);

// We can now create navigation components by looping through the nodes...
```

---

## Get by Guid id async

Gets a node by its identifier as a `Guid` asynchronously.

### Syntax

```cs
public async Task<Node> GetByIdAsync(Guid id, string language = null, int depth = 0)
{
}
```

### Parameters

*id*
> Type: `Guid`  
> The id of the node.

*language*
> Type: `string`  
> The specified language for the node. If no value is provided then the project default language is used.

*depth*
> Type: `int`  
> The depth of decendants to include for the node, to a maximum overall depth of 9. The default is 0. This reduces calls to the HTTP service and improves performance.

### Remarks

Returns *null* if a node with an id matching the specified id does not exist.

### Examples

```cs
using Zengenti.Contensis.Delivery;

// Create a client
var client = ContensisClient.Create();

// Get a specific German node by id, including descendants up to a depth of 3
Node navNode = await client.Nodes.GetByIdAsync(rootNavNodeId, language: "de", depth: 3);

// We can now create navigation components by looping through the nodes...
```

---

## Get by string id

Gets a node by its identifier as a `string`.

### Syntax

```cs
public Node GetById(string id, string language = null, int depth = 0)
{
}
```

### Parameters

*id*
> Type: `string`  
> The id of the node.

*language*
> Type: `string`  
> The specified language for the node. If no value is provided then the project default language is used.

*depth*
> Type: `int`  
> The depth of decendants to include for the node, to a maximum overall depth of 9. The default is 0. This reduces calls to the HTTP service and improves performance.

### Remarks

Returns *null* if a node with an id matching the specified id does not exist.

### Examples

```cs
using Zengenti.Contensis.Delivery;

// Create a client
var client = ContensisClient.Create();

// Get a specific German node by id, including descendants up to a depth of 3
Node navNode = client.Nodes.GetById("7ee53da5-6405-4fb5-80d4-b2752038134d", language: "de", depth: 3);

// We can now create navigation components by looping through the nodes...
```

---

## Get by string id async

Gets a node by its identifier as a `string` asynchronously.

### Syntax

```cs
public async Task<Node> GetByIdAsync(Guid id, string language = null, int depth = 0)
{
}
```

### Parameters

*id*
> Type: `string`  
> The id of the node.

*language*
> Type: `string`  
> The specified language for the node. If no value is provided then the project default language is used.

*depth*
> Type: `int`  
> The depth of decendants to include for the node, to a maximum overall depth of 9. The default is 0. This reduces calls to the HTTP service and improves performance.

### Remarks

Returns *null* if a node with an id matching the specified id does not exist.

### Examples

```cs
using Zengenti.Contensis.Delivery;

// Create a client
var client = ContensisClient.Create();

// Get a specific German node by id, including descendants up to a depth of 3
Node navNode = await client.Nodes.GetByIdAsync("7ee53da5-6405-4fb5-80d4-b2752038134d", language: "de", depth: 3);

// We can now create navigation components by looping through the nodes...
```

---

## Get by path

Gets a node by path.

### Syntax

```cs
public Node GetByPath(string path, int depth = 0)
{
}
```

### Parameters

*path*
> Type: `string`  
> The path to the node.

*depth*
> Type: `int`  
> The depth of decendants to include for the node, to a maximum overall depth of 9. The default is 0. This reduces calls to the HTTP service and improves performance.

### Remarks

Returns *null* if a node with the specified path does not exist.

### Examples

```cs
using Zengenti.Contensis.Delivery;

// Create a client
var client = ContensisClient.Create();

// Get a node by path
Node navNode = client.Nodes.GetByPath("/en-GB/movies/1995/toy-story");
```

---

## Get by path async

Gets a node by path asynchronously.

### Syntax

```cs
public async Task<Node> GetByPathAsync(string path, int depth = 0)
{
}
```

### Parameters

*path*
> Type: `string`
> The path to the node.

*depth*
> Type: `int`
> The depth of decendants to include for the node, to a maximum overall depth of 9. The default is 0. This reduces calls to the HTTP service and improves performance.

### Remarks

Returns *null* if a node with the specified path does not exist.

### Examples

```cs
using Zengenti.Contensis.Delivery;

// Create a client
var client = ContensisClient.Create();

// Get a node by path
Node navNode = await client.Nodes.GetByPathAsync("/en-GB/movies/1995/toy-story");
```

---

## Get by Guid entry id

Gets all nodes that have the specified entry assigned

### Syntax

```cs
public IReadonlyList<Node> GetByEntryId(Guid entryId, string language = null)
{
}
```

### Parameters

*entryId*
> Type: `Guid`
> The entry identifier.

*language*
> Type: `string`  
> The specified language for the nodes. If no value is provided then the project default language is used.

### Examples

```cs
using Zengenti.Contensis.Delivery;

// Create a client
var client = ContensisClient.Create();

// Get all nodes with the entry assigned
IReadonly<Node> nodes = client.Nodes.GetByEntryId(entryId);
```

---

## Get by Guid entry id async

Gets all nodes that have the specified entry assigned asynchronously

### Syntax

```cs
public async Task<IReadonlyList<Node>> GetByEntryIdAsync(Guid entryId, int depth = 0)
{
}
```

### Parameters

*entryId*
> Type: `Guid`
> The entry identifier.

*language*
> Type: `string`  
> The specified language for the nodes. If no value is provided then the project default language is used.

### Examples

```cs
using Zengenti.Contensis.Delivery;

// Create a client
var client = ContensisClient.Create();

// Get all nodes with the entry assigned
IReadonly<Node> nodes = await client.Nodes.GetByEntryIdAsync(entryId);
```

---

## Get by string entry id

Gets all nodes that have the specified entry assigned

### Syntax

```cs
public IReadonlyList<Node> GetByEntryId(string entryId, string language = null)
{
}
```

### Parameters

*entryId*
> Type: `string`
> The entry identifier.

*language*
> Type: `string`  
> The specified language for the nodes. If no value is provided then the project default language is used.

### Examples

```cs
using Zengenti.Contensis.Delivery;

// Create a client
var client = ContensisClient.Create();

// Get all nodes with the entry assigned
IReadonly<Node> nodes = client.Nodes.GetByEntryId("ccd00f54-8c6a-4ea8-88ab-93cda601c181");
```

---

## Get by string entry id async

Gets all nodes that have the specified entry assigned asynchronously

### Syntax

```cs
public async Task<IReadonlyList<Node>> GetByEntryIdAsync(string entryId, int depth = 0)
{
}
```

### Parameters

*entryId*
> Type: `string`
> The entry identifier.

*language*
> Type: `string`  
> The specified language for the nodes. If no value is provided then the project default language is used.

### Examples

```cs
using Zengenti.Contensis.Delivery;

// Create a client
var client = ContensisClient.Create();

// Get all nodes with the entry assigned
IReadonly<Node> nodes = await client.Nodes.GetByEntryIdAsync("ccd00f54-8c6a-4ea8-88ab-93cda601c181");
```