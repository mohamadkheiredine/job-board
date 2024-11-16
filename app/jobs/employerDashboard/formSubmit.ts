'use server';

import { jobSchema } from "@/app/models/formSchema";
import { revalidatePath } from "next/cache";

export type FormState = {
  success: boolean;
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
};

interface jobDataProp {
  job_title: FormDataEntryValue | null;
  location: FormDataEntryValue | null;
  salary: FormDataEntryValue | null;
  slug: FormDataEntryValue | null;
}

async function postJobData(jobData: jobDataProp) {
  try {
    const response = await fetch("http://localhost:3000/api/jobs", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jobData),
    });

    if (!response.ok) {
      const error = await response.json();
      return { success: false, message: error.message };
    }

    return { success: true, data: await response.json() };
  } catch (error) {
    console.error('Error while posting job:', error);
    return { success: false, message: 'Network or server error' };
  }
}

export default async function onSubmitAction(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const job = {
    job_title: formData.get("job_title"),
    location: formData.get("location"),
    salary: formData.get("salary"),
    slug: formData.get("slug"),
  };

  const parsed = jobSchema.safeParse(job);

  if (!parsed.success) {
    return {
      success: false,
      message: "Invalid form data",
    };
  }

  const result = await postJobData(job);
  if (result.success) {
    revalidatePath('/jobs');
    return { success: true, message: "Job added successfully" };
  }

  return { success: false, message: result.message };
}
