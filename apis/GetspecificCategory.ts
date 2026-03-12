import { CategoryInterface } from "@/interfaces/CategoryInterface";

export default async function GetspecificCatygory(
  id: string,
): Promise<CategoryInterface[]> {
  try {
    const data = await fetch(
      `https://ecommerce.routemisr.com/api/v1/categories/${id}`,
      {
        cache: "force-cache",
        next: {
          revalidate: 60 * 100,
        },
      },
    );
    if (!data.ok) {
      throw new Error(`something went wrong`);
    }
    const category = await data?.json();

    return category?.data;
  } catch (error) {
    throw new Error("sever not found");
  }
}
