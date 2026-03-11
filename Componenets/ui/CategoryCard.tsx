import { CategoryInterface } from "@/interfaces/CategoryInterface";
import Image from "next/image";
export default function CategoryCard({
  categoryData,
}: {
  categoryData: CategoryInterface;
}) {
  console.log(categoryData.image);

  return (
    <>
      <div className="bg-red">
        <Image
          src={categoryData.image}
          width={80}
          height={80}
          className=""
          alt={categoryData.name}
        />
        <p>{categoryData.name}</p>
      </div>
    </>
  );
}
