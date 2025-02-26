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
        <title>Alex Hernandez - Product Designer &amp; Software Engineer</title>
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

      <section className="type--header bg--black">
        <div className="container type--center">
          <div className="row">
            <div className="col-sm-12">
              <img
                className="img-avatar"
                src="/imgs/alex.png"
                alt="Alex Hernandez"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <h1 className="type--display type--white">Alex Hernandez</h1>
              <p className="intro type--gray-dark">
                Product Designer &amp; Software Engineer based in Los Angeles,
                CA
              </p>
              <ul className="list--unstyled list--inline pills type--white">
                {/* <li>
                  <Link href="/pics">
                    <a>Pics</a>
                  </Link>
                </li> */}
                <li>
                  <Link href="/">
                    <a className="active">Portfolio</a>
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
      </section>

      <section className="bg--white">
        <section
          className="bg--black border-radius"
          style={{ paddingBottom: "100px" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="row">
                  <div className="col-sm-12">
                    <div style={{ padding: "20px" }}>
                      <div className="row">
                        <div className="col-sm-12 col-md-9">
                          <h2 className="type--white">
                            <Link href="/ea">
                              <a className="type--no-decoration">
                                EA SPORTS App
                              </a>
                            </Link>
                          </h2>
                          <p className="type--gray-dark emphasis">
                            Made for a new generation of sport fans.
                          </p>
                        </div>
                        <div className="col-sm-12 col-md-3">
                          <p className="type--right type--red">
                            <Link href="/ea">
                              <a>View Project &rarr;</a>
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div
                      style={{ borderTop: "1px solid #ccc", padding: "20px" }}
                    >
                      <div className="row">
                        <div className="col-sm-12 col-md-9">
                          <h2 className="type--white">
                            <Link href="/cod">
                              <a className="type--no-decoration">
                                Call of Duty: Companion App
                              </a>
                            </Link>
                          </h2>
                          <p className="type--gray-dark emphasis">
                            Play smarter, win more, and stay connected to the
                            world of Call of Duty, wherever you go.
                          </p>
                        </div>
                        <div className="col-sm-12 col-md-3">
                          <p className="type--right type--red">
                            <Link href="/cod">
                              <a>View Project &rarr;</a>
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div
                      style={{ borderTop: "1px solid #ccc", padding: "20px" }}
                    >
                      <div className="row">
                        <div className="col-sm-12 col-md-9">
                          <h2 className="type--white">
                            <Link href="/metaphor">
                              <a className="type--no-decoration">
                                CSUN Metaphor
                              </a>
                            </Link>
                          </h2>
                          <p className="type--gray-dark emphasis">
                            A beautiful &amp; versatile design system built for
                            CSU Northridge's web &amp; mobile application
                            developers.
                          </p>
                        </div>
                        <div className="col-sm-12 col-md-3">
                          <p className="type--right type--red">
                            <Link href="/metaphor">
                              <a>View Project &rarr;</a>
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div
                      style={{ borderTop: "1px solid #ccc", padding: "20px" }}
                    >
                      <div className="row">
                        <div className="col-sm-12 col-md-9">
                          <h2 className="type--no-decoration type--white">
                            Cronos
                          </h2>
                          <p className="type--gray-dark emphasis">
                            Real-time vehicle dispatching &amp; retrieval
                            system.
                          </p>
                        </div>
                        <div className="col-sm-12 col-md-3">
                          <p className="type--right type--gray-dark">
                            <em>Coming Soon</em>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div
                      style={{ borderTop: "1px solid #ccc", padding: "20px" }}
                    >
                      <div className="row">
                        <div className="col-sm-12 col-md-9">
                          <h2 className="type--no-decoration type--white">
                            Boardello
                          </h2>
                          <p className="type--gray-dark emphasis">
                            A collaboration canvas for gathering, sharing &amp;
                            discussing creative inspiration across teams.
                          </p>
                        </div>
                        <div className="col-sm-12 col-md-3">
                          <p className="type--right type--gray-dark">
                            <em>Coming Soon</em>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section
        className="bg--white"
        style={{ paddingTop: "150px", paddingBottom: "100px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h1 className="type--black">
                <div>That's All Folks.</div>
                <div>Let's Chat!</div>
              </h1>
              <p className="type--black intro" style={{ borderColor: "#fff" }}>
                Hi! I'm Alex Hernandez, a designer and software engineer based
                in Los Angeles, CA. I enjoy collaborating with brands of any
                size that have passion and purpose.
              </p>
              <p className="type--black emphasis">
                Product Designer &middot; Software Engineer
              </p>
            </div>
            <div className="col-lg-3 offset-lg-1 type--right">
              <h4 className="type--black">Social</h4>
              <ul className="list--unstyled list--inline social type--black">
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

              <h4 className="type--black">Contact</h4>
              <ul className="list--unstyled type--black">
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
