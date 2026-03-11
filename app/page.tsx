import Getallproduct from "@/apis/getallCategories";
import CategoryCard from "@/Componenets/ui/CategoryCard";
import Image from "next/image";

export default async function Home() {
  const Allcategory = await Getallproduct();
  console.log(Allcategory);
  if (!Allcategory) {
    return <h2>loading...</h2>;
  }

  return (
    <div className="pt-10 px-20">
      <div className="flex  items-center gap-4 ">
        <span className="bg-sprinGreen rounded-2xl   w-3.5 h-20 "></span>
        <h2 className="m-0  font-bold text-3xl">
          Shop By <span className="">Category</span>
        </h2>
      </div>
      <div>
        <CategoryCard
          categoryData={{
            _id: "6439d61c0049ad0b52b90051",
            name: "Music",
            slug: "music",
            image:
              "https://ecommerce.routemisr.com/Route-Academy-categories/1681511964020.jpeg",
            createdAt: "2023-04-14T22:39:24.365Z",
            updatedAt: "2023-04-14T22:39:24.365Z",
          }}
        />
      </div>
    </div>
  );
}
