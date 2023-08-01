import React from "react";
// import Link from "next/link";

interface ButtonProps {
  route: string;
  text: string;
  isActive: boolean;
}

export function Button(props: ButtonProps) {
  const { route, text, isActive } = props;

  return (
    <>
      {/* <Link href={`/${route}`}> */}
        {isActive ? (
          <button className="px-7 py-5 bg-darkCyan font-fraunces rounded-default text-lightCream hover:bg-cyan">
            {text}
          </button>
        ) : (
          <button className="px-7 py-5 bg-lighterGrey font-fraunces rounded-default text-lightCream cursor-default">
            {text}
          </button>
        )}
      {/* </Link> */}
    </>
  );
}
