import Image from "next/image";


interface Coin {
  id: string;
  icon: string;
  price: number;
  }
  
  interface CoinData {
  coins: Coin[];
  }
  
  interface CoinListProps {
  coinData: CoinData;
  }

const CoinList = ({coinData}: CoinListProps) => {
  console.log(coinData);
  return (
    <div>
      {coinData.coins.map((coin:Coin, index: number) => {
          return (
            <div key={index}>
              <h2>{coin.id}</h2>
              <Image
                src={coin.icon}
                alt="icon"
                width={100}
                height={100}
                priority
              />
              <p>${coin.price}</p>
            </div>
          )
      })}
    </div>
  )
}

export const getStaticProps = async () => {  // getServerSideProps
  const response = await fetch('https://api.coinstats.app/public/v1/coins?skip=0');
  const data = await response.json();
  return {
    props: {
      coinData: data,
    },
  };
}

export default CoinList;