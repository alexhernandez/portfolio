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
        <title>
          Call of Duty Companion App | Alex Hernandez - Product Designer &amp;
          Software Engineer
        </title>
        <meta
          name="description"
          content="The Call of Duty Companion App: your definitive, 24/7 connection to all things Call of Duty. Analyze your performance after every battle, connect with friends across platforms and see when they’re playing. Track your friends’ performance and compare stats and achievements, then team up with your Squad to compete in weekly tournaments for in-game prizes. Plus, get heatmaps, stats, and informational updates from the Call of Duty team to grow your skills and stay ahead of the curve."
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
              <div className="col-5">
                <div className="brand type--white">
                  <Link href="/">
                    <div className="logo">
                      <img
                        className="img-avatar--mini"
                        src="/imgs/alex.png"
                        alt="Alex Hernandez"
                      />
                      Alex Hernandez
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-7">
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

      <section className="bg--black hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h1 className="type--white type--display">
                Call of Duty: Companion App
              </h1>
              <p className="type--white intro">
                The Call of Duty Companion App: your definitive, 24/7 connection
                to all things Call of Duty. Analyze your performance after every
                battle, connect with friends across platforms and see when
                they're playing. Track your friends' performance and compare
                stats and achievements, then team up with your Squad to compete
                in weekly tournaments for in-game prizes. Plus, get heatmaps,
                stats, and informational updates from the Call of Duty team to
                grow your skills and stay ahead of the curve.
              </p>
              <p className="type--red emphasis">
                Manager &middot; Mobile Engineer
              </p>
            </div>
            <div className="col-lg-3 offset-lg-1 type--right">
              <div className="row">
                <div className="col-6 col-lg-12">
                  <h5 className="type--red">Client</h5>
                  <ul className="list--unstyled type--white">
                    <li>Activision</li>
                  </ul>
                  <h5 className="type--red">Tech Stack</h5>
                  <ul className="list--unstyled type--white">
                    <li>JavaScript</li>
                    <li>Vue/React/React Native</li>
                    <li>HTML &amp; CSS</li>
                  </ul>
                </div>
                <div className="col-6 col-lg-12">
                  <h5 className="type--red">Platforms</h5>
                  <ul className="list--unstyled type--white">
                    <li>Web, Android &amp; iOS</li>
                  </ul>
                  <h5 className="type--red">Resources</h5>
                  <ul className="list--unstyled type--white">
                    <li>
                      <a
                        href="https://www.callofduty.com/blog/2018-09/welcome"
                        target="_blank"
                      >
                        COD: Companion App{" "}
                      </a>
                      <span className="icon ion-md-share" />
                    </li>
                  </ul>
                </div>
              </div>
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
              <img
                className="img--fluid"
                src="/imgs/CallOfDuty.png"
                alt="Call of Duty: Companion App"
              />
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
                <div>That's All Folks.</div>
                <div>Let's Chat!</div>
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
