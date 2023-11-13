import { useWagmi } from 'wagmi';

const WalletConnectButton = () => {
  const { connect, account } = useWagmi();

  const handleConnectWallet = async () => {
    try {
      await connect();
    } catch (error) {
      console.error('Error connecting to wallet:', error.message);
    }
  };

  return (
    <div>
      <button onClick={handleConnectWallet}>Connect Wallet</button>
      {account && <p>Connected Account: {account}</p>}
    </div>
  );
};

export default WalletConnectButton;
