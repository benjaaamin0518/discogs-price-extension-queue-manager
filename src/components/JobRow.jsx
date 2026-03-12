import ProgressBar from "./ProgressBar"
import JobDetail from "./JobDetail"

export default function JobRow({ job, selected, setSelected }) {

  const total = job.jobStatus.length

  const success = job.jobStatus.filter(s => s.label === "取得完了").length
  const running = job.jobStatus.filter(s => s.label === "取得中").length
  const waiting = job.jobStatus.filter(s => s.label === "待機中").length

  const progress = (success / total) * 100

  const isOpen = selected?.jobId === job.jobId
  const formatTime = (date) =>{

    if(!date) return "-"

    const d = new Date(date)

    return d.toLocaleString("ja-JP",{
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    })
  }
  return (
    <div style={{ marginBottom: 10 }}>

      <div
        onClick={() => setSelected(isOpen ? null : job)}
        style={{
          border: "1px solid #334155",
          padding: 16,
          borderRadius: 10,
          cursor: "pointer",
          background: "#020617"
        }}
      >

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ fontFamily: "monospace" }}>
            {job.jobId}
          </div>

          <div>
            {Math.round(progress)}%
          </div>
        </div>

        <div style={{ marginTop: 8 }}>
          <ProgressBar value={progress} />
        </div>

        <div style={{ fontSize: 12, opacity: 0.7, marginTop: 7 }}>
          取得完了:{success} 取得中:{running} 待機中:{waiting}
        </div>
        <div style={{ fontSize:12, opacity:0.7, marginTop: 5 }}>

          稼働開始日時: {formatTime(job.startDate)}

        </div>
        <div style={{ fontSize: 12, opacity: 0.7, marginTop: 5 }}>
          稼働時間: {job.elapsedTime}
        </div>

      </div>

      {isOpen && <JobDetail job={job} />}

    </div>
  )
}