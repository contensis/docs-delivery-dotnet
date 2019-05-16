---
description: The PagedList is a object that is used to describe paging details for listing and search results.
---

# PagedList

The PagedList is a object that is used to describe paging details for listing and search results.

| Name | Type | Description |
| :--- | :--- | :---------- |
| PageIndex | `int` | The zero-based index of the result set to return |
| PageSize | `int` | The size of the result set to return |
| TotalCount | `long` | The total number of results available |
| PageCount | `long` | The calculated page count based on the TotalCount and PageSize |
| Items | `IList<T>` | A container for the items being returned |

## Example

The `PagedList` properties provide the information required to implement paging.

```cs
@using System.Web;
@using Zengenti.Data;
@using Zengenti.Contensis.Delivery;

@{
    const int PageSize = 10;

    // Create a client instance 
    var client = ContensisClient.Create();

    // Get the pageIndex passed on the query string
    var selectedPageIndex = int.Parse(Request.QueryString["pageIndex"]);

    // Get the first 10 movie entries
    var moviesList = client.Entries.List("movies", new PageOptions(selectedPageIndex, PageSize));

    // Render a pager, applying a 'selected' class for the current page
}

<ul class="pager">
    @for(var index = 0; index < movieList.PageCount; index++)
    {
        var selectedClass = (selectedPageIndex == index ? "selected" : null);

        // The class will only be applied if selectedClass is not null
        <li class="@selectedClass"><a href="#">@(index + 1)</a></li>
    }
</ul>
```
