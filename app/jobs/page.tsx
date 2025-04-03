import Link from "next/link";
import JobsGrid from "./jobsGrid";
import { Suspense } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../firebase/clientApp";


async function getJobs() {
  const jobCollectionRef = collection(firestore, "jobs");
  const querySnapshot = await getDocs(jobCollectionRef);
  const jobData = querySnapshot.docs.map(doc => ({
    id: doc.data().id as number,
    job_title: doc.data().job_title as string,
    location: doc.data().location as string,
    salary: doc.data().salary as string,
    slug: doc.data().slug as string,
  }));

  return jobData;
}

async function Jobs() {
  const jobs = await getJobs();

  return <JobsGrid jobs={jobs} />;
}

const JobsPage = () => {
  return (
    <>
      <header className="gap-12 mx-auto my-12 mb-20 w-[90%] max-w-[75rem] text-black text-xl">
        <h1>Our jobs are here for you</h1>
        <p className="m-0 text-black">Choose your new job</p>
        <p className="m-0">
          <Link
            href="/jobs/employerDashboard"
            className="inline-block mt-4 px-4 py-2 rounded-md bg-gradient-to-r from-[#1e90ff] to-[#007bff] text-white font-bold no-underline"
          >
            Post a new job opportunity
          </Link>
        </p>
      </header>

      <div>
        <Suspense
          fallback={
            <p className="text-center animate-loading">Fetching jobs...</p>
          }
        >
          <Jobs />
        </Suspense>
      </div>
    </>
  );
};
export default JobsPage;
