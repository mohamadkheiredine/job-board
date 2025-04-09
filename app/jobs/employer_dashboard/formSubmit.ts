'use server';

import { firestore } from "@/app/firebase/clientApp";
import { jobSchema } from "@/app/models/formSchema";
import { addDoc, collection } from "firebase/firestore";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

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
    // Reference to the Firestore collection
    const jobCollectionRef = collection(firestore, 'jobs'); // 'jobPostings' is the collection name
    
    // Add a new document with the job data
    const docRef = await addDoc(jobCollectionRef, jobData);
    if (docRef) {
      return true;
    }
  
  } catch (e) {
    console.error("Error adding document: ", e);
    throw new Error("Error adding document");
  }
}

export default async function onSubmitAction(
  _: FormState,
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
  if (result) {
    revalidatePath('/jobs');
    redirect("/jobs");
  }

  return { success: false, message: "Error posting the data" };
}
