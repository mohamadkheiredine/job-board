import { Button } from "@/app/components/ui/button";
import { firestore } from "@/app/firebase/clientApp";
import { collection, getDocs, query, where } from "firebase/firestore";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function jobDetailPage({
  params,
}: {
  params: Promise<{ jobSlug: string }>;
}) {
  const slug = (await params).jobSlug;

  const getJobBySlug = async (slug: string) => {
    try {
      const jobCollectionRef = collection(firestore, "jobs");

      const q = query(jobCollectionRef, where("slug", "==", slug));

      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0];

        return {
          id: doc.data().id as number,
          job_title: doc.data().job_title as string,
          location: doc.data().location as string,
          salary: doc.data().salary as string,
          slug: doc.data().slug as string,
        };
      } else {
        console.log("No job found with that slug.");
      }
    } catch (error) {
      console.error("Error fetching job by slug: ", error);
      return null;
    }
  };

  const job = await getJobBySlug(slug);
  if (!job) {
    notFound();
  }

  return (
    <div className="mt-31">
      <h1 className="text-center m-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black mt-16">
        {job.job_title}
      </h1>

      <p className="text-center m-10 text-xl sm:text-2xl lg:text-3xl text-black">
        Location: {job.location}
      </p>

      <section className="text-center m-8 lg:m-12 xl:m-16">
        <h2 className="font-thin text-lg sm:text-xl lg:text-2xl xl:text-3xl mb-4 text-black">
          Job Description
        </h2>

        <p className="text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed max-w-4xl mx-auto text-black">
          As a valued member of the team, your role will involve contributing to
          various company projects, assisting in the day-to-day operations, and
          ensuring smooth workflow.
        </p>
      </section>

      <section className="text-center m-8 lg:m-12 xl:m-16">
        <h2 className="font-thin text-lg sm:text-xl lg:text-2xl xl:text-3xl mb-4 text-black">
          Job Benefits
        </h2>

        <ul className="list-none text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed max-w-4xl mx-auto">
          <li className="text-black">Competitive salary and performance bonuses.</li>
          <li className="text-black">Comprehensive health insurance coverage.</li>
          <li className="text-black">Flexible working hours and remote work options.</li>
          <li className="text-black">Generous vacation and paid time off.</li>
          <li className="text-black">Opportunities for professional growth and development.</li>
        </ul>
      </section>
      <div className="flex flex-col items-center text-center gap-3 my-8">
        <p className="text-base sm:text-lg font-normal text-black max-w-lg leading-relaxed">
          Start a new {job.job_title} position by applying here
        </p>
        <Link href="/candidate_dashboard">
          <Button className="py-2 px-6 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer">
            Apply Now
          </Button>
        </Link>
      </div>
    </div>
  );
}
