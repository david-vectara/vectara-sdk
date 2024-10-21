# Do Not Use #
This code has been **deprecated** in favour of the FERN generated SDKs for Python and Typescript:

* [TypeScript-SDK](https://github.com/vectara/typescript-sdk) 
* [Python-SDK](https://github.com/vectara/python-sdk)

# Vectara-SDK (Deprecated)

This repository will host all flavours of the Vectara-SDK and will have multiple implementations.

## Languages
This repository covers the following languages:

* TypeScript (compiling to multiple frameworks)
* Python (will migrate @davidglevy/vectara-skunk-client)
* Java (TBC)

## Getting Started
Each implementation will have it's own documentation, however at a high level:

### Configuration
We've used the approach "convention over configuration" whereby the library will read
the file .vec_auth.yaml in a users HOME directory by default, however each implementation
also allows explicit configuration.

### TypeScript

Install the library dependency.
```bash
npm install vectara

```
Then import the Factory for instantiation.
```
import {Factory, ResponseSet, SummaryResponse} from '@vectara'

// We use a promise when Authenticating with OAuth
const client = await (new Factory()).build();
const facade = client.queryFacade;

const corpus_id = 400;
const result = facade.simple("What did Einstein discover?", corpus_id)
console.log("We found summary:\n" + (result.summary as Array<SummaryResponse>)[0].text)
```



## Continuous Integration
Each language will utilise a best-of-breed testing framework and a github
action to verify successful integration.

## Documentation
Once we've got our initial implementations done, we'll push out a documentation
update to a github hosted page and link it here.

One goal will be to use a tabbed display showing "how to" for each language when
performing language calls.
