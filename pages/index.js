import { useState } from "react";

function Index() {
  const [text, setText] = useState("Welcome to Next.js APIs on Netlify!");
  return <div>{text}</div>;
}

export default Index;
