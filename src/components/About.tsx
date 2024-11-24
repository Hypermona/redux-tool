import { Link } from "react-router-dom";
export function Component() {
  const array = new Array(1000000).fill("#########");
  console.log(array);
  return (
    <div>
      <Link to="/">Home</Link>This is About page
    </div>
  );
}

Component.displayName = "About";
