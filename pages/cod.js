import Head from "next/head";
import Link from "next/link";

export default function Metaphor() {
  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Alex Hernandez | Product Designer &amp; Software Engineer</title>
        <meta
          name="description"
          content="Los Angeles based Product Designer & Software Engineer. I help people design products that transform and elevate their everyday life."
        />

        <link rel="shortcut icon" type="image/png" href="/imgs/favicon.png" />
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
              <div className="col-sm-6">
                <div className="brand type--white">
                  <Link href="/">
                    <a>Alex Hernandez</a>
                  </Link>
                </div>
              </div>
              <div className="col-sm-6">
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
                    <Link href="/inspiration">
                      <a>Inspiration</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section
        className="bg--black"
        style={{ paddingTop: "150px", paddingBottom: "100px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h1 className="type--white type--display">
                Call of Duty: Companion App
              </h1>
              <p className="type--white intro">
                Play smarter, win more, and stay connected to the world of Call
                of Duty, wherever you go.
              </p>
              <p className="type--red emphasis">
                UI Engineer &middot; Mobile Developer
              </p>
            </div>
            <div className="col-lg-3 offset-lg-1 type--right">
              <h5 className="type--red">Clients</h5>
              <ul className="list--unstyled type--white">
                <li>Activision</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* <section
        className="bg--white"
        style={{ paddingTop: "100px", paddingBottom: "50px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <h2>Challenge</h2>
            </div>
            <div className="col-lg-7 offset-lg-1">
              <p className="emphasis type--gray-dark">
                CSUN has a suite of products all designed and developed by
                different organizations across the university. A major problem
                facing all products was the continued re-development of
                interface elements and a lack of branding consistency. Our
                challenge was to create a design language that could streamline
                the experience for users as well as unify product teams across
                multiple product lines.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      <section className="bg--black" style={{ paddingBottom: "50px" }}>
        <div className="container-fluid type--center">
          <div className="row">
            <div className="col-sm-12">
              <img className="img--fluid" src="/imgs/CallOfDuty.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg--black"
        style={{ paddingTop: "150px", paddingBottom: "100px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h1 className="type--white">
                <div>That’s All Folks.</div>
                <div>Let’s Chat!</div>
              </h1>
              <p className="type--white intro" style={{ borderColor: "#fff" }}>
                Hi! I'm Alex Hernandez, a designer and software engineer based
                in Los Angeles, CA. I enjoy collaborating with brands of any
                size that have passion and purpose.
              </p>
              <p className="type--red emphasis">
                Product Designer &middot; Software Engineer
              </p>
            </div>
            <div className="col-lg-3 offset-lg-1 type--right">
              <h4 className="type--red">Social</h4>
              <ul className="list--unstyled list--inline social type--white">
                <li>
                  <a
                    className="icon ion-logo-github"
                    href="https://github.com/alexhernandez"
                    target="_blank"
                  ></a>
                </li>
                <li>
                  <a
                    className="icon ion-logo-dribbble"
                    href="https://dribbble.com/alexhernandez"
                    target="_blank"
                  ></a>
                </li>
                <li>
                  <a
                    className="icon ion-logo-linkedin"
                    href="https://linkedin.com/in/alex-hdz"
                    target="_blank"
                  ></a>
                </li>
              </ul>

              <br />

              <h4 className="type--red">Contact</h4>
              <ul className="list--unstyled type--white">
                <li>
                  <a href="mailto:hi@alejandrohernandez.me">
                    hi@alejandrohernandez.me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
