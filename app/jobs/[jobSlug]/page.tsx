import { Button } from "@/app/components/ui/button";
import { firestore } from "@/app/firebase/clientApp";
import { collection, getDocs, query, where } from "firebase/firestore";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function jobDetailPage({
  params,
}: {
  params: Promise<{ jobSlug: string }>; //like the name of the folder
}) {
  // const resolvedParams = await params;
  // const slug = resolvedParams.jobSlug;
  const slug = (await params).jobSlug;

  const getJobBySlug = async () => {
    const jobCollectionRef = collection(firestore, "jobs");
    const q = query(jobCollectionRef, where("slug", "==", slug));
    const querySnapshot = await getDocs(q);

    const currentSlug = querySnapshot.docs.map(doc => doc.data().slug);
    const job = querySnapshot.docs.map((doc) => {
      if (doc.data().slug === currentSlug) {
        return {
          id: doc.data().id as number, 
          job_title: doc.data().job_title as string,
          location: doc.data().location as string,
          salary: doc.data().salary as string,
          slug: doc.data().slug as string,
        }
      }
    })
    console.log("the job in the slug page is: ", job);

    return job[0];
  };

  const job = await getJobBySlug();
  if (!job) {
    notFound();
  }

  return (
    <>
      <h1 className="text-center m-10 font-thin text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
        {job.job_title}
      </h1>

      <p className="text-center m-10 font-thin text-xl sm:text-2xl lg:text-3xl">
        Location: {job.location}
      </p>

      <section className="text-center m-8 lg:m-12 xl:m-16">
        <h2 className="font-thin text-lg sm:text-xl lg:text-2xl xl:text-3xl mb-4">
          Job Description
        </h2>

        <p className="text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed max-w-4xl mx-auto">
          As a valued member of the team, your role will involve contributing to
          various company projects, assisting in the day-to-day operations, and
          ensuring smooth workflow.
        </p>
      </section>

      <section className="text-center m-8 lg:m-12 xl:m-16">
        <h2 className="font-thin text-lg sm:text-xl lg:text-2xl xl:text-3xl mb-4">
          Job Benefits
        </h2>

        <ul className="list-none text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed max-w-4xl mx-auto">
          <li>Competitive salary and performance bonuses.</li>
          <li>Comprehensive health insurance coverage.</li>
          <li>Flexible working hours and remote work options.</li>
          <li>Generous vacation and paid time off.</li>
          <li>Opportunities for professional growth and development.</li>
        </ul>
      </section>
      <div className="flex flex-col items-center text-center gap-3 my-8">
        <p className="text-base sm:text-lg font-normal text-gray-700 max-w-lg leading-relaxed">
          Start a new {job.job_title} position by applying here
        </p>
        <Link href="/candidate_dashboard">
          <Button className="py-2 px-6 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Apply Now
          </Button>
        </Link>
      </div>
    </>
  );
}
