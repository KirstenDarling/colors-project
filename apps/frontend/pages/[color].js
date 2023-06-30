import React, { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import { useRouter } from "next/router";

// create a client for fetching data
const client = createClient({
  projectId: "zsjkxx81",
  dataset: "production",
  apiVersion: "2023-06-29",
  useCdn: false,
});

// create a groq query to retrieve all colors
const data = await client.fetch(`*[_type == "color"]{name, hexcode}`);

export default function Color() {
  const [currentData, setCurrentData] = useState([
    "back to the start",
    "another one",
  ]);
  const router = useRouter();
  const [pageColor, setPageColor] = useState(router.query.color);
  console.log(router.query.color);

  useEffect(() => {
    setCurrentData(data);
  }),
    [data, router.query.color];

  const thisData = currentData.find((data) => data.name === pageColor);
  console.log(thisData?.hexcode);

  return (
    <div className="color-page" style={{ backgroundColor: thisData?.hexcode }}>
      <h1>{thisData?.name}</h1>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = data.map((color) => {
    return {
      params: { color: color.name },
    };
  });
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  return { props: { params } };
}
