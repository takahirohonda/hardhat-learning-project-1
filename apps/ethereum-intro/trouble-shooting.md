### 2-1. Missing Signer

```bash
contract runner does not support sending transactions (operation="sendTransaction", code=UNSUPPORTED_OPERATION, version=6.11.1)
```

**Solution**

The 3rd argument is signer. It's not the provider. Singer can call transactions. Provider is enough for

```js
const provider = new ethers.BrowserProvider(window.ethereum);
const signer = await provider.getSigner();

const contract = new ethers.Contract(
  contractAddress,
  [
    'function count() public',
    'function getCounter() public view returns (uint)',
  ],
  signer
);
```

And I misspelt uint as unit 😢 and had this error...

```
User
contract.getCounter is not a function
TypeError: contract.getCounter is not a function from this: import "hardhat/console.sol";
```

### 2-2. Internal JSON-RPC error

I don't know what happened, but I imported a new account to the wallet and it worked.

```bash
could not coalesce error (error={ "code": -32603, "message": "Internal JSON-RPC error." })
```

### 2-3. cannot pass enum as a function argument in the contract

```java
enum Class { Mage, Healer, Barbarian }

// this gives compilation error
function createHero(Class class) public payable { ... }

// the fix is just pass index and get the enum by using uint.
function createHero(uint index) public payable {

```

```bash
Generating typings for: 8 artifacts in dir: typechain-types for target: ethers-v6
An unexpected error occurred:

SyntaxError: Type expected. (69:8)
  67 |
  68 |     createHero: TypedContractMethod<
> 69 |       [class: BigNumberish, ],
     |        ^
  70 |       [void],
  71 |       'payable'
  72 |     >
```
