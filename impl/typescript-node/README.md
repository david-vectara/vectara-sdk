# Vectara Client Implementation - typescript-node

## Purpose
This project provides the client interface generated from the OpenAPI specification for [Vectara API V2](https://docs.vectara.com/vectara-oas.yaml).

## Project Metadata
This project has been created by David Levy within Vectara's Field Engineering. Although this library is not
formerly supported, we will endeavor to answer requests which utilise this library for paying customers with
best effort.

## Getting Started

To install the library issue the following command:

```bash

npm install @david-vectara/vectara-ts-node

```

## Initializing the Client

To initialize the client, you can either use implicit or explicit configuration. Explicit configuration is
strongly recommended for production, where you can utilize a secret store and inject the credentials.

### Explicity Configuration

You can create the client with explicit injection of configuration parameters. This is useful
for production deployments where you source your properties from env parameters or a vault.

#### API Key Explicit Initialization
```typescript

    const config = new Config("YOUR_CUSTOMER_ID", {"apiKey": "YOUR_API_KEY"});
    const temp: Promise<Client | void> = new Factory().config(config).build();

```

#### OAuth2 Explicit Initialization
```typescript
    const config = new Config("YOUR_CUSTOMER_ID", {"oauth2AppId": "YOUR_APP_ID", "oauth2AppSecret": "YOUR_APP_SECRET"});
    const temp: Client | void = await new Factory().config(config).build();

```