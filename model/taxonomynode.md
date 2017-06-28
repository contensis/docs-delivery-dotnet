# TaxonomyNode


The Quote type represents a section of referenced text from an external source.

## Properties

| Name | Type | Description |
| :--- | :--- | :---------- |
| Name | string | The name of the taxonomy node |
| Path | string | The full path of the taxonomy node, including the current node |
| Children | IReadOnlyList&lt;TaxonomyNode&gt; | Child taxonomy nodes |

## Example

##### Get a taxonomy node field from an entry

```cs
@using Zengenti.Contensis.Delivery;

@{
    // Retrieve a movie by it's ID.
    var movie = client.Get("3bb72e32-1fc7-4289-bf65-60a5b8ce1f78");

    // Get the field value as a TaxonomyNode instance.
    var movieGenre = film.Get<TaxonomyNode>("genre");
}

<div>
    @movieGenre.Value
</div>
```

