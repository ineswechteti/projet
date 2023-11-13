import { useState } from 'react';
import { useWagmi } from 'wagmi';

const TokenInfo = () => {
  const { getBalance } = useWagmi();
  const [contractAddress, setContractAddress] = useState('');
  const [tokenInfo, setTokenInfo] = useState(null);

  const handleGetTokenInfo = async () => {
    try {
      const balance = await getBalance(contractAddress);
      setTokenInfo({ balance });
    } catch (error) {
      console.error('Error getting token info:', error.message);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Token Contract Address"
        value={contractAddress}
        onChange={(e) => setContractAddress(e.target.value)}
      />
      <button onClick={handleGetTokenInfo}>Get Token Info</button>
      {tokenInfo && (
        <div>
          <p>Balance: {tokenInfo.balance}</p>
        </div>
      )}
    </div>
  );
};

export default TokenInfo;
