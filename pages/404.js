import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <title>
          Not Found | Alex Hernandez - Product Designer &amp; Software Engineer
        </title>
        <meta
          property="og:title"
          content="Not Found | Alex Hernandez - Product Designer &amp; Software Engineer"
        />

        <meta
          name="description"
          content="Los Angeles based Product Designer & Software Engineer. I help people design products that transform and elevate their everyday life."
        />
        <meta
          property="og:description"
          content="Los Angeles based Product Designer & Software Engineer. I help people design products that transform and elevate their everyday life."
        />

        <meta
          name="keywords"
          content="Engineering Manager, Software Engineer, Designer, Product Designer"
        />

        <meta
          property="og:image"
          content="https://alejandrohernandez.me/imgs/alex.png"
        />
        <link rel="shortcut icon" type="image/png" href="/imgs/favicon.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="imgs/apple-touch-icon.png"
        />

        <meta property="og:url" content="https://alejandrohernandez.me/404" />
        <meta property="og:type" content="website" />

        <link
          rel="stylesheet"
          href="https://unpkg.com/ionicons@4.2.0/dist/css/ionicons.min.css"
        />
        <link rel="stylesheet" href="https://use.typekit.net/nmj3qua.css" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro"
        />
        <link rel="stylesheet" href="/static/css/bootstrap-reboot.min.css" />
        <link rel="stylesheet" href="/static/css/bootstrap-grid.min.css" />
        <link rel="stylesheet" href="/static/css/portfolio.css" />
      </Head>

      <nav className="bg--black">
        <div className="container">
          <div className="navigation">
            <div className="row align-items-center">
              <div className="col-6">
                <div className="brand type--white">
                  <Link href="/">
                    <a>Alex Hernandez</a>
                  </Link>
                </div>
              </div>
              <div className="col-6">
                <ul className="list--unstyled nav__list type--white">
                  <li>
                    <Link href="/">
                      <a>Portfolio</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/articles">
                      <a>Articles</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/quotes">
                      <a>Quotes</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section
        className="bg--white"
        style={{ paddingTop: "150px", paddingBottom: "100px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h1 className="type--black">
                <div>Whoops, Sorry! </div>
                <div>Nothing to see here.</div>
              </h1>
              <p className="type--black intro" style={{ borderColor: "#fff" }}>
                Let's head back to my portfolio.
              </p>
              <p>
                <Link href="/">
                  <a>&larr; Go Back</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
