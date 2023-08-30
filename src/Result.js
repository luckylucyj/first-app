
function Result(props) {
  // 구조 분해
  const {fruit, color , background, content}=props.data;
  //data: fruit:'',....

  return (
    <div style={{ display: "block" }}>
      <img src={`${fruit}.png`} width={100} height={100} />

      <div
        style={{
          padding: "10px",
          marginTop: "10px",
          backgroundColor: background,
          color: color,
        }}
      >
        {content}
      </div>
    </div>
  );
}

export default Result;
