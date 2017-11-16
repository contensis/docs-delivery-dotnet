# Components

Components are structures that are defined in the Component editor as custom types. They can be added as field types to [Content Types](/model/contenttype.md) as entry-level fields or as [ComposedField](/model/composed.md) items. Components themselves can contain any field types except other components or ComposedField types.

## Getting component data

Accessing component data from either an entry-level field or from a ComposedFieldItem instance can be done by either providing a user-defined type as a generic type parameter to specify the return type or alternatively using the non-generic method to return a `dynamic` object instance.

When a component is accessed that contains either Entry, Asset or Image links, then the links are resolved at the point of first access.

Consider the following user-defined type that matches a component:

```cs
using Zengenti.Contensis.Delivery;

public class MovieRole: ComponentModel
{
    public string RoleName { get; set; }

    public string Description { get; set; }

    public Entry Person => Resolve<Entry>("person");
}
```

Accessing the data from an Entry is done in the same way any other field data is accessed.

```cs
// Access the director field data using the generic type
MovieRole directorRole = movieEntry.Get<MovieRole>("director");

// The Person entry is fully resolved
Entry director = directorRole.Person;
```

```cs
// Alternatively return a dynamic object
dynamic directorRole = movieEntry.Get("director");

// The Person entry is fully resolved
Entry director = directorRole.Person;
```

The same applies when accessing a list of components:

```cs
// Access the actors field data using the generic type
List<MovieRole> actorRoles = movieEntry.Get<List<MovieRole>>("actors");

foreach(MovieRole role in actorRoles)
{
    // The Person entry is fully resolved
    var actorName = role.Person.Get<string>("name");
    ...
}
```

More information around the use of ComponentModel [can be found on the TypedModel page](/key-concepts/typed-models.md#entrymodel--componentmodel-base-classes).