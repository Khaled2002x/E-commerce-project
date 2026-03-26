import { getServerSession } from "next-auth";

export default async function Brands() {
  // const data = await getServerSession({ secret: process.env.NEXTAUTH_SECRET });
  // console.log(data);

  return (
    <>
      <div className="pt-10 text-center">Brands</div>
    </>
  );
}
