import { ProductInterface } from "@/interfaces/ProductInterface";

export default async function GetAllProduct(): Promise<ProductInterface[]> {
  try {
    const data = await fetch(
      `https://ecommerce.routemisr.com/api/v1/products`,
      {
        cache: "force-cache",
        next: {
          revalidate: 60 * 60,
        },
      },
    );
    if (!data.ok) {
      throw new Error(`something went wrong`);
    }
    const product = await data?.json();

    return product?.data;
  } catch {
    throw new Error("sever not found");
  }
}
