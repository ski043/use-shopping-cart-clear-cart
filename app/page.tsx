import { Button } from "@/components/ui/button";
import AddToBag from "./components/AddToBag";
import OpenCartButton from "./components/OpenCartButton";

const item = {
  name: "super shoes",
  description: "super cool shoes from nike or somethin like this",
  price: 200,
  currency: "USD",
  image:
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f71c2a6d-9358-4949-86b9-1cdde924f9c6/air-vapormax-2023-flyknit-herrenschuh-PRxpTh.png",
  price_id: "price_1O4RteHaexiOGySSybE97Xjl",
};

export default function Home() {
  return (
    <div>
      <OpenCartButton />
      <img src={item.image} alt="yoo" className="w-24 h-24" />
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <p>{item.price}</p>
      <AddToBag
        currency={item.currency}
        description={item.description}
        image={item.image}
        name={item.name}
        price={item.price}
        price_id={item.price_id}
        key={item.price_id}
      />
    </div>
  );
}
