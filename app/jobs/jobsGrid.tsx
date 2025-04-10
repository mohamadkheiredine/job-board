
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
    <ul className="w-[90%] max-w-[90rem] grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-10 mx-auto my-8 list-none p-0">
      {jobs.map((job, index) => (
        <li key={index}>
          <JobItem {...job} />
        </li>
      ))}
    </ul>
  );
}

