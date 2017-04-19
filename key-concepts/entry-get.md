# Getting an entry

Requesting an individual entry can be achieved by using one of the `Get` method overloads.

- [Get(Guid id, string language, int linkDepth)](#get-by-guid-id)
- [Get(string id, string language, int linkDepth)](#get-by-string-id)
- [GetAsync(Guid id, string language, int linkDepth)](#get-by-guid-id-async)  
- [GetAsync(string id, string id, int linkDepth)](#get-by-string-id-async)


## Get by Guid id

Gets an entry by its `Guid` identifier.

### Syntax

```cs
public Entry Get(Guid id, string language = null, int linkDepth = 0)
{
}
```

### Parameters

*id*
> Type: `Guid`  
> The id of the entry.

*language*
> Type: `string`  
> The specified language variation for the entry. If no value is provided then the project default language is used.

*linkDepth*
> Type: `int`  
> The depth at which to resolve the full entry data for a linked entry, with a maximum depth value of 10. By default, no entry data is resolved for linked entries.  **Please note:** linked assets are always fully resolved.

### Remarks

Returns *null* if an entry with an id matching the specified id does not exist.

### Examples

```cs
// Create a client
var client = ContensisClient.Create();

// Get the french variation of the movie entry and resolve links to a depth of 3
Entry film = client.Entries.Get(movieGuid, "fr-fr", 3);
```

---

## Get by string id

Gets an entry by its identifier.

### Syntax

```cs
public Entry Get(string id, string languageCode = null, int linkDepth = 0)
{
}
```

### Parameters

*id*
> Type: `string`  
> The id of the entry.

*language*
> Type: `string`  
> The specified language variation for the entry. If no value is provided then the project default language is used.

*linkDepth*
> Type: `int`  
> The depth at which to resolve the full entry data for a linked entry, with a maximum depth value of 10. By default, no entry data is resolved for linked entries.  **Please note:** linked assets are always fully resolved.

### Remarks

Returns *null* if an entry with an id matching the specified id does not exist. If the id string is not a valid `Guid` format then an exception will be thrown.

### Examples

```cs
// Create a client
var client = ContensisClient.Create();

// Get the french variation of the movie entry and resolve links to a depth of 3
Entry film = client.Entries.Get("456e5f2a-a1cf-4520-a46c-e5f22ed299e8", "fr-fr", 3);
```

---

## Get by Guid id async

Gets an entry by its `Guid` identifier asynchronously.

### Syntax

```cs
public async Task<Entry> GetAsync(Guid id, string language = null, int linkDepth = 0)
{
}
```

### Parameters

*id*
> Type: `Guid`  
> The id of the entry.

*language*
> Type: `string`  
> The specified language variation for the entry. If no value is provided then the project default language is used.

*linkDepth*
> Type: `int`  
> The depth at which to resolve the full entry data for a linked entry, with a maximum depth value of 10. By default, no entry data is resolved for linked entries.  **Please note:** linked assets are always fully resolved.

### Remarks

Returns *null* if an entry with an id matching the specified id does not exist.

### Examples

```cs
// Create a client
var client = ContensisClient.Create();

// Get the french variation of the movie entry and resolve links to a depth of 3
Entry film = await client.Entries.GetAsync(movieGuid, "fr-fr", 3);
```

---

## Get by string id async

Gets an entry by its `string` identifier asynchronously.

### Syntax

```cs
public async Task<Entry> GetAsync(string id, string language = null, int linkDepth = 0)
{
}
```

### Parameters

*id*
> Type: `string`  
> The id of the entry.

*language*
> Type: `string`  
> The specified language variation for the entry. If no value is provided then the project default language is used.

*linkDepth*
> Type: `int`  
> The depth at which to resolve the full entry data for a linked entry. The max depth that can be specified is 10 - larger values will be handled as being 10. By default, no entry data is resolved.

### Remarks

Returns *null* if an entry with an id matching the specified id does not exist. If the id string is not a valid `Guid` format then an exception will be thrown.

### Examples

```cs
// Create a client
var client = ContensisClient.Create();

// Get the french variation of the movie entry and resolve links to a depth of 3
Entry film = await client.Entries.GetAsync("456e5f2a-a1cf-4520-a46c-e5f22ed299e8", "fr-fr", 3);
```

---
