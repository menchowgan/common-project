const getMessage = (nickname: string): VNode => {
  const ns = nickname?.split(/\s+/);

  return (
    <span
      style={{
        fontSize: "64px",
        fontFamily:
          "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
      }}
    >
      <span>欢迎进入 </span>
      {ns.map((n, index) => {
        if (ns.length === 1 || index < ns.length - 1) {
          return <span>{n}</span>;
        }
        return <span style="color: #eee">{n}</span>;
      })}
    </span>
  );
};

export default getMessage;
