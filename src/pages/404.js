import Link from "next/link";

export default function FourOhFour() {
  return (
    <>
      <div className="center">
        <h1>404 - Page Not Found</h1>
        <Link href="/">
          <a>Go back home</a>
        </Link>
      </div>

      <style jsx>
        {`
          .center {
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            height: 100vh;
            text-transform: uppercase;
          }
        `}
      </style>
    </>
  );
}
