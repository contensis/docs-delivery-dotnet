# Search

A query tree structure, along with order and paging specifiers, allows a search to be performed against indexed documents held in ElasticSearch. The query API allows any required sub-query structure to be defined and a comprehensive selection of Operators enable individual field level evaluation.

## Queries

This example demonstrates a simple search with default ordering and paging options:

### Synchronous

```cs
@using Zengenti.Contensis.Delivery
@using Zengenti.Data
@using Zengenti.Search

@{
    var client = ContensisClient.Create();

    var query = new Query(
        Op.Contains("title", "Batman"),
        Op.GreaterThan("runtime", 200)
    );

    // Execute the search returning entries
    PagedList<Entry> entriesResult = client.Entries.Search(query);

    // Execute the search returning typed models
    PagedList<Movie> moviesResult = client.Entries.Search<Movie>(query);
}
```

### Asynchronous

```cs
@using Zengenti.Contensis.Delivery
@using Zengenti.Data
@using Zengenti.Search

@{
    var client = ContensisClient.Create();

    // Execute the search asynchronously  returning entries
    PagedList<Entry> entriesResult = await client.Entries.SearchAsync(query);

    // Execute the search returning typed models
    PagedList<Movie> moviesResult = await client.Entries.SearchAsync<Movie>(query);
}
```

## Sub-queries

A sub-query is a query within another query that is used as a condition to further restrict the results. Effectively they are defined by an explicit nesting of [logical operators](query-operators.md#logical-operators).

This example demonstrates a simple search with a sub-query:

Synchronous

```cs
var query = new Query(
    Op.Contains("title", "Batman"),
    Op.Or(
        Op.GreaterThan("releaseDate", 1960),
        Op.Contains("tagline", "gotham")
    )
);
```

## Ordering

Results can be ordered by one or more fields in an ascending or descending direction. Order clauses are prioritised in the order that they are added. By default, if no order clauses are specified then the entry results are ordered by the EntryTitle in an ascending direction.

Order by 'releaseDate'.

```cs
query.OrderBy.Add("releaseDate")
```

Order by 'releaseDate' in a descending direction using the '-' token.

```cs
query.OrderBy.Add("-releaseDate")
```

Multiple order clauses.

```cs
query.OrderBy.Add("title", "-releaseDate")
```

## Paging

Paging allows the number of results to be restricted to a defined count so that the results are easier to handle and ensures a response is returned quickly. The page index can also be specified to allow which set of results is to be returned. The page size is limited to a maximum of 10,000 however this is not recommended.

```cs
// Create a query
var query = new Query(
    Op.EqualTo("sys.contentTypeId", "film"));

// Set the number of entries to be returned per page
query.PageSize = 50;

// Get the 2nd result set
query.PageIndex = 1;
```

## Specifying fields

### System fields

System fields such as id, contentTypeId, projectId, versionNo etc. are under the *sys* object and can be accessed using a dot notation, e.g. sys.id, sys.contentTypeId, sys.projectId, sys.version.versionNo.

The *entryTitle* field is a dynamic value, determined by the *EntryTitleField* value in the content type.

### Data fields

Fields defined in the content type for the entry can be accessed by their API id.

## Complete example

The example below combines the ordering and paging concepts:

```cs
@using Zengenti.Contensis.Delivery
@using Zengenti.Data
@using Zengenti.Search

@{
    var client = ContensisClient.Create();

    var query = new Query(
        Op.Contains("title", "Batman"),
        Op.GreaterThan("runtime", 200)
    );

    query.OrderBy.Add("-releaseDate")
    query.PageIndex = 1;
    query.PageSize = 50;

    // Execute the search
    var results = client.Entries.Search(query);
}
```
