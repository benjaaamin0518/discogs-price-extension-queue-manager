import JobRow from "./JobRow";

export default function JobList({ jobs, selected, setSelected }) {
  return (
    <div>
      {(jobs ?? []).map((job) => (
        <JobRow
          key={job.jobId}
          job={job}
          selected={selected}
          setSelected={setSelected}
        />
      ))}
    </div>
  );
}
