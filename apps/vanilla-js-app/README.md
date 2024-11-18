# Troubleshooting

## eth_sendRawTransaction nNonce too high

Getting error on the blockchain below:

```bash
eth_sendRawTransaction
  Nonce too high. Expected nonce to be 2 but got 15. Note that transactions can't be queued when automining.
```

This indicates that the transaction nonce (a sequential number for transactions sent from an address) is out of sync with the local blockchain or your transaction queue. This usually happens in development environments with automining (e.g., Hardhat or Ganache).

**Solutions**

If you're using MetaMask, the nonce stored by MetaMask might be out of sync with the blockchain. You can reset it:

Go to MetaMask Settings > Advanced > Reset Account.
This clears the transaction history but does not affect funds.

# MetaMask - RPC Error: Internal JSON-RPC error

This is a generic error, but it usually indicates an issue with the parameters sent in the transaction or the state of the blockchain environment. I got this error and checked the backend log and found `Nounce too high` error.
