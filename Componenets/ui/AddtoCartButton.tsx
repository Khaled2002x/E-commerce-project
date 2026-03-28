"use client";
import AddToCart from "@/apis/AddToCart";
import { Spinner } from "@/components/ui/spinner";
import { ReactNode, useState } from "react";
import { toast } from "react-toastify";

export default function AddtoCartButton({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className: string;
  id: string;
}) {
  const [loading, setLoading] = useState(false);

  const HandelAddtoCart = async () => {
    setLoading(true);
    try {
      const data = await AddToCart({ id });
      if (data) toast.success("Item added to cart sucsssesfully");
    } catch (error) {
      toast.error(error.message);
    }
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <button onClick={HandelAddtoCart} className={className}>
          {children}
        </button>
      )}
    </>
  );
}
