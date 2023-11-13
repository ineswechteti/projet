import WalletConnectButton from '../components/WalletConnectButton';
import TokenInfo from '../components/TokenInfo';
import TransferForm from '../components/TransferForm';

const Home = () => {
  return (
    <div>
      <WalletConnectButton />
      <TokenInfo />
      <TransferForm />
    </div>
  );
};

export default Home;
