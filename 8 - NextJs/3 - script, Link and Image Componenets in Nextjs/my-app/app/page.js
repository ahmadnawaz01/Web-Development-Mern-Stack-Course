import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <Image  src="https://fastly.picsum.photos/id/818/200/300.jpg?hmac=lE_Le7TxnELgojCX97DVlE9CLlZJWqnfbaQR3Chjstw"  width={200} height={200}  alt="" />
    </div>
  );
}
