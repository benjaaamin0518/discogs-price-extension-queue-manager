
import { useQueue } from "../hooks/useQueue"

export default function JobDetail({ job }) {
  // const {data,isLoading} = useQueue()
  if(!job) return null
  // console.log(data.filter((cur) => cur.jobId == job.jobId));
  // job = (data.length > 0) ? data.filter((cur) => cur.jobId == job.jobId)[0]:[];

  return (

    <div
      style={{
        border: "1px solid #334155",
        borderTop: "none",
        padding: 20,
        background: "#0f172a"
      }}
    >

      <h3 style={{ marginBottom: 10 }}>
        Job Detail
      </h3>

      <div style={{ fontFamily: "monospace", marginBottom: 10 }}>
        {job.jobId}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,150px)",
          gap: 8
        }}
      >

        {job.jobStatus.map((s, i) => {

          let color = "#64748b"

          if (s.label === "取得完了") color = "#22c55e"
          if (s.label === "取得中") color = "#3b82f6"
          if (s.label === "待機中") color = "#94a3b8"

          return (
            <div
              key={i}
              style={{
                padding: 10,
                borderRadius: 6,
                background: "#020617",
                border: `1px solid ${color}`,
                fontSize: 12
              }}
            >

              <div>{s.resourceId ?? "-"}</div>

              <div style={{ color }}>
                {s.label}
              </div>

            </div>
          )
        })}

      </div>

    </div>
  )
}
