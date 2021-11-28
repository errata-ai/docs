XML is supported through the external program [`xsltproc`](http://xmlsoft.org/XSLT/xsltproc.html).

You also need to provide a version 1.0 XSL Transformation \(XSLT\) for converting to HTML:

```ini
[*.xml]
Transform = docbook-xsl-snapshot/html/docbook.xsl
```
