import { supcategoryBasedonCategoryInterface } from "@/interfaces/supcategoryBasedonCategoryInterface";

export default async function GetAllSubCategoriesOnCategory(
  id: string,
): Promise<supcategoryBasedonCategoryInterface[]> {
  try {
    const data = await fetch(
      `https://ecommerce.routemisr.com/api/v1/categories/${id}/subcategories`,
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
