# Project Layout

This project will be an attempt to combine concurrent development
on SDKs and will use the following structure to place sensible
partitions on these efforts (herding the cats):

* ./common - this folder will contain common specification files, like protos
* ./impl/{language} - every language dependent effort will have it's own folder here
* ./docs - combined project documentation from all languages
* ./* - Top level project information
