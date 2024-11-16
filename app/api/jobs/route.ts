// app/api/jobs/route.ts
import { initMongoose } from "@/lib/mongoose";
import Job from "@/app/models/job";

export async function GET() {
  try {
    await initMongoose(); //connect to mongodb
    const jobs = await Job.find().exec();
    console.log("all data are: ", jobs)
    return new Response(JSON.stringify(jobs), { status: 200 });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return new Response(
      JSON.stringify({ message: "Internal Server Error" }),
      { status: 500 }
    );
  }
}


export async function POST(req: Request) {
  try {
    await initMongoose(); // Connect to MongoDB

    const body = await req.json();
    const { job_title, location, salary, slug } = body;

    if (!job_title || !location || !salary || !slug) {
      return new Response(
        JSON.stringify({ message: "Missing required fields" }),
        { status: 400 }
      );
    }

    const newJob = await Job.create({ job_title, location, salary, slug });
    return new Response(JSON.stringify(newJob), { status: 201 });
  } catch (error) {
    console.error("Error creating job:", error);
    return new Response(
      JSON.stringify({ message: "Internal Server Error" }),
      { status: 500 }
    );
  }
}