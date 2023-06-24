import colors from "../data/colors.json";

export default function Color({ color }) {
  return (
    <div className="color-page" style={{ backgroundColor: color.hex }}>
      <h1>{color.name}</h1>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = colors.map((color) => {
    return {
      params: { color: color.name },
    };
  });
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // that find is only going to find the first item that matches the condition
  const color = colors.find((color) => color.name === params.color);
  return { props: { color } };
}
