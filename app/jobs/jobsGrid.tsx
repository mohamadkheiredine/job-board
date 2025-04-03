
import JobItem from "./JobItem";

export type Job = {
  id: number;
  job_title: string;
  location: string;
  salary: string;
  slug: string;
};

export default function JobsGrid({ jobs }: { jobs: Job[] }) {
  return (
    <ul className="w-[90%] max-w-[90rem] grid grid-cols-[repeat(auto-fill,_minmax(20rem,_1fr))] gap-[5rem] mx-auto my-[2rem] list-none p-0">
      {jobs.map((job, index) => (
        <li key={index}>
          <JobItem {...job} />
        </li>
      ))}
    </ul>
  );
}
