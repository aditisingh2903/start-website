export default function Survey() {
  return (
    <div style={{ padding: "100px 20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        BinSense Survey
      </h2>

      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSeXuwmHaLgRC8lXTwgk04V4X7AjamGhKkSr0fr2rh1MbNPl7g/viewform?embedded=true"
        width="100%"
        height="800"
        style={{ border: "none" }}
        title="Survey Form"
      ></iframe>
    </div>
  );
}