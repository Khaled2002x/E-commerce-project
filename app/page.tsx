import Getallproduct from "@/apis/getallCategories";
import CategoryCard from "@/Componenets/ui/CategoryCard";
import { CategoryInterface } from "@/interfaces/CategoryInterface";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default async function Home() {
  const Allcategory: CategoryInterface[] = await Getallproduct();
  console.log(Allcategory);
  if (!Allcategory) {
    return <h2>loading...</h2>;
  }

  return (
    <div className="px-6 md-px-20  animate-fade-in lg:px-52 py-10">
      <section className="categorySection ">
        <header className=" flex justify-between mb-10 items-center">
          <div className="flex  items-center gap-4 ">
            <span className="bg-sprinGreen rounded-2xl   w-3.5 h-20 "></span>
            <h2 className="m-0  font-bold text-3xl">
              Shop By <span className=" text-sprinGreen">Category</span>
            </h2>
          </div>
          <div className="">
            <Link
              className="text-sprinGreen flex  items-center gap-2 font-bold"
              href={"categories"}
            >
              View All Categories <FaArrowRight />
            </Link>
          </div>
        </header>

        <div className=" grid grid-cols-2 gap-1 md:grid-cols-6">
          {Allcategory.map((category: CategoryInterface) => {
            return <CategoryCard key={category._id} categoryData={category} />;
          })}
        </div>
      </section>
    </div>
  );
}
