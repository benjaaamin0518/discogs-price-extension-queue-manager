
export default function ProgressBar({value}){

  return (
    <div style={{
      width:"100%",
      height:10,
      background:"#1e293b",
      borderRadius:6,
      overflow:"hidden"
    }}>
      <div
        style={{
          width:value+"%",
          height:"100%",
          background:"linear-gradient(90deg,#22c55e,#4ade80)",
          transition:"width 0.6s ease"
        }}
      />
    </div>
  )
}
