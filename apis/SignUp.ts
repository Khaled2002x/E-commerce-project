"use server";
import { TypesignUpSchema } from "@/app/auth/register/SignupSchema";

export default async function SignUp(formdata: TypesignUpSchema) {
  try {
    const data = await fetch(
      `https://ecommerce.routemisr.com/api/v1/auth/signup`,
      {
        method: "POST",
        body: JSON.stringify(formdata),
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    return data.ok;
  } catch (error) {
    throw error;
  }
}
