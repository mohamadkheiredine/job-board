"use server";
import { revalidatePath } from "next/cache";
import { schema } from "../models/formSchema";
import { redirect } from "next/navigation";

export type FormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
};

export async function onSubmitAction(
  prevState: FormState,
  data: FormData
): Promise<FormState> {
  try {
    const formData = Object.fromEntries(data);
    const parsed = schema.safeParse(formData);
    

    if (!parsed.success) {
      const fields: Record<string, string> = {};
      for (const key of Object.keys(formData)) {
        fields[key] = formData[key].toString();
      }
      return {
        message: "Invalid form data",
        fields,
        issues: parsed.error.issues.map((issue) => issue.message),
      };
    }

  } catch (error) {
    console.error("there is an error: ", error);
    return { message: "An unexpected error occurred." };
  }
  
  revalidatePath("/candidate_dashboard");
    redirect("/");
}
