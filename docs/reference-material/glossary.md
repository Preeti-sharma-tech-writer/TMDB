# Glossary

<dl className="glossary">
  <dt>API key</dt>
  <dd>Key tied to the application that is used to identify the application or third-party platform for server-to-server communication.</dd>

  <dt>Bearer token</dt>
  <dd>A token sent in the Authorization header to authenticate requests. The token should be kept secret and never exposed in client-side code, shared files, or version control.</dd>

  <dt>ISO 639-1</dt>
  <dd>The internationally recognized format used to identify language using two letters, for example `en`.</dd>

<dt>ISO 3166-1</dt>
  <dd>The internationally recognized format used to identify country using two letters, for example `US`.</dd>

  <dt><code> append_to_response</code> </dt>
  <dd> A query parameter on detail endpoints that adds additional sub-resource data to the same request separated by comma. The values should be subrequest of the parent request endpoint and should be valid individual endpoint. For example, if <code>/movie/{id}/reviews</code> is a valid request, then <code>reviews</code> can be appended in the detail API.</dd>

  <dt>Enum</dt>
  <dd>Predefined and fixed set of values that are allowed in query parameter. Values outside the enum values are rejected or silently ignored by the request API.</dd>

  <dt>Path parameter</dt>
  <dd>A variable value in path of an API request that identifies which specific resource to retrieve. It is almost always required in an API request. </dd>

  <dt>Query parameter</dt>
  <dd>Key-value pair in an API request that is used to filter or sort the response based on requested data. It can be optional or required and comes after the question mark (<code>?</code>) in a request.</dd>

  <dt>String</dt>
  <dd>The value that is enclosed in double quotes and can contain letters, numbers, spaces, and symbols . For example,<code>"string"</code>`.</dd>

  <dt>Array</dt>
  <dd>An ordered list of values that can include string, numbers or objects. It is included within square brackets marks (<code>[28, 12, 878]</code>).</dd>

  <dt>Integer</dt>
  <dd>The value that has only whole numbers.</dd>

  <dt>Number</dt>
  <dd>A numeric value that can include decimals. For example, <code>8.5</code> or <code>697.4596</code>.</dd>
