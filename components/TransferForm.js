import { useState } from 'react';
import { useWagmi } from 'wagmi';

const TransferForm = () => {
  const { transfer } = useWagmi();
  const [recipientAddress, setRecipientAddress] = useState('');
  const [tokenAmount, setTokenAmount] = useState('');
  const [transactionStatus, setTransactionStatus] = useState('');

  const handleTransferTokens = async () => {
    try {
      await transfer(recipientAddress, tokenAmount);
      setTransactionStatus('Transaction successful');
    } catch (error) {
      console.error('Error transferring tokens:', error.message);
      setTransactionStatus('Transaction failed');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Recipient Address"
        value={recipientAddress}
        onChange={(e) => setRecipientAddress(e.target.value)}
      />
      <input
        type="text"
        placeholder="Token Amount"
        value={tokenAmount}
        onChange={(e) => setTokenAmount(e.target.value)}
      />
      <button onClick={handleTransferTokens}>Transfer Tokens</button>
      {transactionStatus && <p>Transaction Status: {transactionStatus}</p>}
    </div>
  );
};

export default TransferForm;
