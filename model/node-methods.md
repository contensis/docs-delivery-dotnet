# Node methods

## Children

Gets the child nodes for the current node.

### Syntax

```cs
public IReadonlyList<Node> Children()
{
}
```

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
public Task<IReadonlyList<Node>> ChildrenAsync()
{
}
```

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