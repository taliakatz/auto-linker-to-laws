# Automatic Linker To Israeli Laws References

This linker matches between Israeli laws references in our network and their officals source.
It uses some editing distance techniques, mostly based on regular expressions in Hebrew.
You can find a PDF in the repository which explain more about the linker and the purposes of it's creation.

### Getting Started

The linker is available as a chrome extension, you can download it on that link:   and use it automaticly on every page which you route to.

For example, search "חוק העונשין", which is a name of one of the Israeli laws.
You will see a link that wraps each reference of this law in every page which include it. With a click on that link you will probably be navigated to the Israeli Knesset site
or to the Wikisource of that law.

### Additionals features

There exist a target to unite the global law's URLs into one form in the network. For each match that the linker finds, it also binds a popup which present the future uri 
of the specific law. This features isn't useful for the user yet, but it was added to the linker in purpose to get this reorganization idea into the public knowledge.
