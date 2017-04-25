# List entries

Requesting a list of entries can be achieved by using one of the `List` method overloads.

- [List(PageOptions pageOptions)](#list)
- [ListAsync(PageOption pageOptions)](#list-async)
- [List(string contentTypeId, PageOptions pageOptions)](#list-by-content-type)
- [ListAsync(string contentTypeId, PageOptions pageOptions)](#list-by-content-type-async)
- [List(string contentTypeId, PageOptions pageOptions, IList<string> order)](#list-by-content-type-with-paging-and-ordering)
- [ListAsync(string contentTypeId, PageOptions pageOptions, IList<string> order)](#list-by-content-type-with-paging-and-ordering-asynchronously)
- [List(EntryListOptions listOptions)](#list-with-options-object)
- [ListAsync(EntryListOptions listOptions)](#list-with-options-object-asynchronously)

## List

Lists entries for all content types, with paging.

### Syntax

```cs
public PagedList<Entry> List(PageOptions pageOptions = null)
{
}
```

### Parameters

*pageOptions*
> Type: [PageOptions](/model/pageoptions.md)   
> Paging options for specifying the page index and size.

### Remarks

The default for the pageOptions is PageSize: 25, PageIndex: 0.

### Examples

```cs
// Create a client
var client = ContensisClient.Create();

// Get all entries with the default paging options
var entries = client.Entries.List();

// Get all entries with specified paging options
var entries = client.Entries.List(new PageOptions(3, 10));
```

---



## List async

Lists entries for all content types asynchronously, with paging.

### Syntax

```cs
public async Task<PagedList<Entry>> List(PageOptions pageOptions = null)
{
}
```

### Parameters

*pageOptions*
> Type: [PageOptions](/model/pageoptions.md)   
> Paging options for specifying the page index and size.

### Remarks

The default for the PageOptions is PageSize: 25, PageIndex: 0.

### Examples

```cs
// Create a client
var client = ContensisClient.Create();

// Get all entries with the default paging options
var entries = await client.Entries.ListAsync();

// Get all entries with specified paging options
var entries = await client.Entries.ListAsync(new PageOptions(3, 10));
```

---



## List by content type

Lists entries for a specific content type.

### Syntax

```cs
public PagedList<Entry> List(string contentTypeId, PageOptions pageOptions = null)
{
}
```

### Parameters

*contentTypeId*
> Type: `string`  
> The id of the content type to restrict the entries by.

*pageOptions*
> Type: [PageOptions](/model/pageoptions.md)  
> Paging options for specifying the page index and size.

### Remarks

The default for the PageOptions is PageSize: 25, PageIndex: 0.

### Examples

```cs
// Create a client
var client = ContensisClient.Create();

// Get entries based on the Movie content type with the default paging options
var entries = client.Entries.List("movie");

// Get all entries based on the Movie content type with specified paging options
var entries = client.Entries.List("movie", new PageOptions(3, 10));
```

---


## List by content type async

Lists entries for a specific content type.

### Syntax

```cs
public async Task<PagedList<Entry>> ListAsync(string contentTypeId, PageOptions pageOptions = null)
{
}
```

### Parameters

*contentTypeId*
> Type: `string`  
> The id of the content type to restrict the entries by.

*pageOptions*
> Type: [PageOptions](/model/pageoptions.md)  
> Paging options for specifying the page index and size.

### Remarks

The default for the PageOptions is PageSize: 25, PageIndex: 0.

### Examples

```cs
// Create a client
var client = ContensisClient.Create();

// Get entries based on the Movie content type with the default paging options
var entries = await client.Entries.ListAsync("movie");

// Get all entries based on the Movie content type with specified paging options
var entries = await client.Entries.ListAsync("movie", new PageOptions(3, 10));
```

---


## List by content type with paging and ordering

Lists entries for a specific content type, with paging and field order configuration.

### Syntax

```cs
public PagedList<Entry> List(string contentTypeId, PageOptions pageOptions, IList<string> order)
{
}
```

### Parameters

*contentTypeId*
> Type: `string`  
> The id of the content type to restrict the entries by.

*pageOptions*
> Type: PageOptions  
> Paging options for specifying the page index and size.

*order*
> Type: `IList<string>`  
> Options for specifying the result ordering.

### Remarks

The default for the PageOptions is PageSize: 25, PageIndex: 0.

### Examples

```cs
// Create a client
var client = ContensisClient.Create();

// Get all entries based on the Movie content type with the default paging options
var entries = client.Entries.List("movie", new PageOptions(3, 10), 
    new [] { "title", "-releaseDate" } );
```

---



## List by content type with paging and ordering asynchronously

Lists entries for a specific content type, with paging and field order configuration.

### Syntax


```cs
public async Task<PagedList<Entry>> ListAsync(string contentTypeId, PageOptions pageOptions, IList<string> order)
{
}
```

### Parameters

*contentTypeId*
> Type: `string`  
> The id of the content type to restrict the entries by.

*pageOptions*
> Type: PageOptions  
> Paging options for specifying the page index and size.

*order*
> Type: `IList<string>`  
> Options for specifying the result ordering.

### Remarks

The default for the PageOptions is PageSize: 25, PageIndex: 0.

### Examples

```cs
// Create a client
var client = ContensisClient.Create();

// Get all entries based on the Movie content type with the default paging options
var entries = await client.Entries.ListAsync("movie", new PageOptions(3, 10), 
    new [] { "title", "-releaseDate" } );
```

---



## List with options object

Lists entries using an EntryListOptions object to allow more granular control of entries being returned.

### Syntax

```cs
public PagedList<Entry> List(EntryListOptions listOptions)
{
}
```

### Parameters

*listOptions*
> Type: `EntryListOptions`
> Allows all parameters to be optional set and exposes less commonly used parameters.

### Remarks

The default for the PageOptions is PageSize: 25, PageIndex: 0.

### Examples

```cs
// Create a client
var client = ContensisClient.Create();

// Use the list options to filter the entry listing
var entries = client.Entries.List(new EntryListOptions{
    ContentTypeId = "movie",
    PageOptions = new PageOptions(3, 10),
    Order = new[] { "title", "-sys.version.created" },
    Language = "fr-fr",
    LinkDepth = 5,
    Fields = new[] { "title", "description", "releaseDate", "coverImage" }
});
```

---


## List with options object asynchronously

Lists entries using an EntryListOptions object to allow more granular control of entries being returned.

### Syntax

```cs
public Task<PagedList<Entry>> ListAsync(EntryListOptions listOptions)
{
}
```

### Parameters

*listOptions*
> Type: `EntryListOptions`  
> Allows all parameters to be optional set and exposes less commonly used parameters.

### Remarks

The default for the PageOptions is PageSize: 25, PageIndex: 0.

### Examples

```cs
// Create a client
var client = ContensisClient.Create();

// Use the list options to filter the entry data
var entries = await client.Entries.ListAsync(new EntryListOptions{
    ContentTypeId = "movie",
    PageOptions = new PageOptions(3, 10),
    Order = new[] { "title", "-sys.version.created" },
    Language = "fr-fr",
    LinkDepth = 5,
    Fields = new [] { "title", "description", "releaseDate", "coverImage" }
});
```
---