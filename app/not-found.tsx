import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not Found",
};

export default function NotFound() {
  return (
    <div>
      <h1>404 Not Found :P</h1>
    </div>
  );
}
