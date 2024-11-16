import { initMongoose } from "@/lib/mongoose"; // Ensure this import path is correct
import Job from "@/app/models/job"; // Ensure this path is correct

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {

  try {
    await initMongoose(); // Connect to MongoDB
    const slug = (await params).slug;
    const jobs = await Job.find().exec();

    const job = jobs.filter((job) => job.slug === slug)[0];
    if (!job) {
      return new Response(
        JSON.stringify({ message: "Job not found" }),
        { status: 404 }
      );
    }
    // Return the found job as a response
    return new Response(JSON.stringify(job), { status: 200 });
  } catch (error) {
    console.error("Error fetching job by slug:", error);
    return new Response(
      JSON.stringify({ message: "Internal Server Error" }),
      { status: 500 }
    );
  }
}
