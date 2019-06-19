# Node methods

## Children

Gets the child nodes for the current node.

### Syntax

```cs
public IReadonlyList<Node> Children(IList<string> entryFields = null, entryLinkDepth = 0)
{
}
```

### Parameters

*entryFields*
> Type: `IList<string>`  
> The fields to include for the entry (if attached) and any of it's linked entries if an entryLinkDepth value is included.

*entryLinkDepth*
> Type: `int`  
> The fields to include for the entry (if attached) and any of it's linked entries if an entryLinkDepth value is included.

### Example

```cs
// Get the child nodes for the current node.
IReadonlyList<Node> childNodes = currentNode.Children();
```

---

## ChildrenAsync

Gets the child nodes for the current node asynchronously.

### Syntax

```cs
public Task<IReadonlyList<Node>> ChildrenAsync(IList<string> entryFields = null, entryLinkDepth = 0)
{
}
```

### Parameters

*entryFields*
> Type: `IList<string>`  
> The fields to include for the entry (if attached) and any of it's linked entries if an entryLinkDepth value is included.

*entryLinkDepth*
> Type: `int`  
> The fields to include for the entry (if attached) and any of it's linked entries if an entryLinkDepth value is included.

### Example

```cs
// Get the child nodes for the current node.
IReadonlyList<Node> childNodes = await currentNode.ChildrenAsync();
```

---

## Parent

Gets the parent node for the current node.

### Syntax

```cs
public Node Parent()
{
}
```

### Example

```cs
// Get the child nodes for the current node.
Node parentNode = currentNode.Parent();
```

---

## ParentAsync

Gets the parent node for the current node asynchronously.

### Syntax

```cs
public Node ParentAsync()
{
}
```

### Remarks

Consider using ParentId if that is all is required to avoid unneccessary network calls.

### Example

```cs
// Get the parent node for the current node.
Node parentNode = await currentNode.ParentAsync();
```

---

## AncestorAtLevel

Gets the ancestor at the specified level.

### Syntax

```cs
public Node AncestorAtLevel(int level)
{
}
```

### Parameters

*level*
> Type: `integer`  
> The level in the tree of the ancestor to return

### Remarks

If a level is specified that is equal to or greater than the level of the current node then _null_ will be returned.

### Example

```cs
// Get the ancestor node at level 2
Node ancestorNode = currentNode.AncestorAtLevel(2);
```

---

## AncestorAtLevelAsync

Gets the ancestor node at the specified level.

### Syntax

```cs
public async Task<Node> AncestorAtLevelAsync(int level)
{
}
```

### Parameters

*level*
> Type: `integer`  
> The level in the tree of the ancestor to return

### Remarks

If a level is specified that is equal to or greater than the level of the current node then *null* will be returned.

### Example

```cs
// Get the ancestor node at level 2
Node ancestorNode = await currentNode.AncestorAtLevelAsync(2);
```

---

## Ancestors

Gets the ancestor nodes for a node with an optional start level.

### Syntax

```cs
public IReadonlyList<Node> Ancestors(int startLevel = 0)
{
}
```

### Parameters

*startLevel*
> Type: `integer`  
> The level to start returning the ancestors from

### Remarks

If a level is specified that is equal to or greater than the level of the current node then an empty list will be returned.

### Example

```cs
// Get the ancestors nodes starting at level 2
IReadonlyList<Node> ancestorNodes = currentNode.Ancestors(2);

// Create a breadcrumb component from the list...
```

---

## AncestorsAsync

Gets the ancestor nodes for a node asynchronously with an optional start level.

### Syntax

```cs
public async Task<IReadonlyList<Node>> AncestorsAsync(int startLevel = 0)
{
}
```

### Parameters

*startLevel*
> Type: `integer`  
> The level to start returning the ancestors from

### Remarks

If a level is specified that is equal to or greater than the level of the current node then an empty list will be returned.

### Example

```cs
// Get the ancestors nodes starting at level 2
IReadonlyList<Node> ancestorNodes = await currentNode.AncestorsAsync(2);

// Create a breadcrumb component from the list...
```

---

## Siblings

Gets the sibling nodes for a node including the current node.

### Syntax

```cs
public IReadonlyList<Node>> Siblings()
{
}
```

### Example

```cs
// Get the sibling nodes
IReadonlyList<Node> siblingNodes = currentNode.Siblings();
```

---

## SiblingsAsync

Gets the sibling nodes for a node asynchronously including the current node.

### Syntax

```cs
public async Task<IReadonlyList<Node>> SiblingsAsync()
{
}
```

### Example

```cs
// Get the siblings nodes
IReadonlyList<Node> siblingNodes = await currentNode.SiblingsAsync();
```

---

## Entry

Gets the entry instance if one has been assigned

### Syntax

```cs
public Entry Entry()
{
}
```

### Remarks

Will return *null* if an entry is not assigned, the associated entry does not exist or if the entry has not be published and the current version status is published.

### Example

```cs
// Get the associated entry
Entry entry = currentNode.Entry();
```

---

## Entry

Gets the entry instance if one has been assigned

### Syntax

```cs
public Entry Entry(int linkDepth = 0, IList<string> fields = null)
{
}
```

### Parameters

*linkDepth*
> Type: `integer`  
> The level in the tree of the ancestor to return

*fields*
> Type: `IList<string>`  
> The list of fields to include in the entry. By default, all fields are returned.

### Remarks

Will return *null* if an entry is not assigned, the associated entry does not exist or if the entry has not be published and the current version status is published.

The language for any returned entry will match the language of the node.

### Example

```cs
// Get the associated entry only including the fields I want
Entry movie = currentNode.Entry(fields: new string[] {"title,", "synopsis", "releaseYear"});
```

---

## EntryAsync

Gets the entry instance asynchronously if one has been assigned

### Syntax

```cs
public async Task<Entry> Entry(int linkDepth = 0, IList<string> fields = null)
{
}
```

### Parameters

*linkDepth*
> Type: `integer`  
> The level in the tree of the ancestor to return

*fields*
> Type: `IList<string>`  
> The list of fields to include in the entry. By default, all fields are returned.

### Remarks

Will return *null* if an entry is not assigned, the associated entry does not exist or if the entry has not be published and the current version status is published.

The language for any returned entry will match the language of the node.

### Example

```cs
// Get the associated entry only including the fields I want
Entry movie = await currentNode.EntryAsync(fields: new string[] {"title,", "synopsis", "releaseYear"});
```

---

## Entry&lt;T&gt;

Gets the entry instance as a [typed model](key-concepts/typed-models.md) if one has been assigned

### Syntax

```cs
public T Entry<T>(int linkDepth = 0, IList<string> fields = null)
{
}
```

### Parameters

*linkDepth*
> Type: `integer`  
> The level in the tree of the ancestor to return

*fields*
> Type: `IList<string>`  
> The list of fields to include in the entry. By default, all fields are returned.

### Remarks

Will return *null* if an entry is not assigned, the associated entry does not exist or if the entry has not be published and the current version status is published.

The language for any returned entry will match the language of the node.

### Example

```cs
public class Movie: EntryModel
{
    public string Title { get; set; }

    public string Synopsis { get; set; }

    public int ReleaseYear { get; set; }
}


// Get the associated entry only including the fields I want
Movie movie = currentNode.Entry<Movie>(fields: new string[] {"title,", "synopsis", "releaseYear"});
```

---

## EntryAsync&lt;T&gt;

Gets the entry instance as a [typed model](key-concepts/typed-models.md) asynchronously if one has been assigned

### Syntax

```cs
public async Task<T> Entry<T>(int linkDepth = 0, IList<string> fields = null)
{
}
```

### Parameters

*linkDepth*
> Type: `integer`  
> The level in the tree of the ancestor to return

*fields*
> Type: `IList<string>`  
> The list of fields to include in the entry. By default, all fields are returned.  

### Remarks

Will return *null* if an entry is not assigned, the associated entry does not exist or if the entry has not be published and the current version status is published.

The language for any returned entry will match the language of the node.

### Example

```cs
public class Movie: EntryModel
{
    public string Title { get; set; }

    public string Synopsis { get; set; }

    public int ReleaseYear { get; set; }
}


// Get the associated entry only including the fields I want
Movie movie = await currentNode.EntryAsync<Movie>(fields: new string[] {"title,", "synopsis", "releaseYear"});
```

---