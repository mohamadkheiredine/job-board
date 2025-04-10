import Link from "next/link";
import { Job } from "./jobsGrid";

export default function JobItem({ job_title, location, salary, slug }: Job) {
  return (
    <article className="flex flex-col justify-between h-full rounded-md shadow-[0_0_12px_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-300 ease-in-out text-[#ddd6cb] bg-gradient-to-r from-[#2c1e19] to-[#25200f] w-full">
      <header>
        <div className="p-[0.5rem] pr-[1rem] pb-0 pl-[1rem]">
          <h2 className="m-0 text-[1.5rem]">{job_title}</h2>
          <p className="text-[0.75rem] text-[#cfa69b]">Located in {location}</p>
        </div>
      </header>
      <div className="flex flex-col justify-between h-full">
        <p className="pt-[1rem] pr-[1rem] pb-0 pl-[1rem]">{salary}</p>
        <div className="p-[1rem] text-right">
          <Link
            href={`/jobs/${slug}`}
            className="sm:inline-block w-fit  mt-4 px-4 py-2 rounded-md bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white font-bold no-underline transition-all hover:from-[#1d4ed8] hover:to-[#60a5fa] hover:shadow-xl"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
