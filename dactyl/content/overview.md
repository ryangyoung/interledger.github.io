## Building on Interledger

Build payments into your apps or other protocols without tying yourself to a specific currency or payment network. Create accounts on our demo ledgers and start sending Interledger payments with the client libraries. Check out [Getting Started][1].

## Interledger Architecture

Interledger enables payments across many different types of ledgers. The Interledger Protocol Suite is comprised of four layers: the Application, Transport, Interledger, and Ledger protocols. To learn more, see the [Interledger Architecture Overview][2].

## Protocol Specs and APIs

To dive into the technical specs, see the [Interledger RFCs][3]. Also see the documentation for the components of the reference implementation.

## Security

Interledger provides secure multi-hop payments using [Hashed Timelock Agreements][4]. As of Interledger version 4, these conditions are not enforced by the ledger, as it would be too costly and slow. Instead, participants in the network use these hashlocks to perform accounting with their peers. This accounting is used to determine in-flight balances, which are periodically settled with on-ledger transfers or payment channel claims. For a detailed description of how this works, read [the ILPv4 specification.][5]

Next: [Getting Started][1]

[1]: https://interledger.org/docs/tutorials/getting-started.html
[2]: https://interledger.org/rfcs/0001-interledger-architecture/
[3]: https://github.com/interledger/rfcs
[4]: https://github.com/interledger/rfcs/blob/master/0022-hashed-timelock-agreements/0022-hashed-timelock-agreements.md
[5]: https://github.com/interledger/rfcs/blob/master/0027-interledger-protocol-4/0027-interledger-protocol-4.md