# Content type

A content type resource can be retrieved from the Delivery API to understand the schema of an [Entry](/model/entry.md). Entries are constructed and validated using the information defined in the fields collection.

| Name | Type | Description |
| :--- | :--- | :---------- |
| Id | string | A unique content type identifier, e.g. "actor" |
| ProjectId | string | The project identifier, e.g. "movieDb" |
| Name | [LocalizedValue](#localizedvalue)  | The friendly name given to a content type |
| Description | [LocalizedValue](#localizedvalue) | The description text given to a content type |
| EntryTitleField | string  | The id of the field which should be used as the title in entry listings |
| Fields | IReadOnlyList<[Field](#field)> | A collection of fields that form the schema for an entry |
| Enabled | bool | A flag to indicate whether the content type is enabled and allows new entries to be created based on it |
| DefaultLanguage | string | The default [language code](/key-concepts/localization.md) for the entries based on the content type |
| SupportedLanguages | IReadOnlyList&lt;string&gt; |  |
| WorkflowId | string | The workflow that derived entries will  |
| DataFormat | string | Either 'entry' or 'asset' |
| PreviewUrl | string | The url that an example of an entry based on the content type can be viewed |
| Version | [VersionInfo](/model/versioninfo.md) | Version information about the content type |

## Field

The field object is the definition of a field within an entry. The field also contains the validations and editor configuration that is used within the Contensis UI and services.

| Name | Type | Description |
| :--- | :--- | :---------- |
| Id | string | A unique field identifier |
| Name | [LocalizedValue](#localizedvalue) | A friendly name for the field |
| Description | [LocalizedValue](#localizedvalue) | The description for the field's purpose |
| DataType | [DataType](/key-concepts/data-types.md) | The field data type |
| DataFormat | string | The field [DataFormat](/key-concepts/data-format.md) |
| Default | [LocalizedValue](#localizedvalue) | The default value for the field if no value is provided by an editor |

<!--- | Validations | `object` | The validations that will be performed on the field when the entry is either created or updated |
| Editor | Editor | Configuration for the Contensis entry editor | --->

## LocalizedValue

A localized value is a object that has values that are keyed by [language codes](/key-concepts/localization.md) which allows multilingual variations of a specific property.