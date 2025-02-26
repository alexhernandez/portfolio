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
          CSUN Metaphor | Alex Hernandez - Product Designer &amp; Software
          Engineer
        </title>
        <meta
          property="og:title"
          content="CSUN Metaphor | Alex Hernandez - Product Designer &amp; Software Engineer"
        />

        <meta
          name="description"
          content="A design system built from the ground up to ensure all web &amp; mobile apps maintain consistency with CSU Northridge (CSUN) branding and identity standards."
        />
        <meta
          property="og:description"
          content="A design system built from the ground up to ensure all web &amp; mobile apps maintain consistency with CSU Northridge (CSUN) branding and identity standards."
        />

        <meta
          name="keywords"
          content="Engineering Manager, Software Engineer, Designer, Product Designer"
        />

        <meta
          property="og:image"
          content="https://alejandrohernandez.me/imgs/results.png"
        />
        <link rel="shortcut icon" type="image/png" href="/imgs/favicon.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="imgs/apple-touch-icon.png"
        />

        <meta
          property="og:url"
          content="https://alejandrohernandez.me/metaphor"
        />
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
              <h1 className="type--white type--display">CSUN Metaphor</h1>
              <p className="type--white intro">
                A design system built from the ground up to ensure all web &amp;
                mobile apps maintain consistency with CSU Northridge (CSUN)
                branding and identity standards.
              </p>
              <p className="type--red emphasis">
                Product Owner &middot; Product Designer &middot; Front End
                Developer
              </p>
            </div>
            <div className="col-lg-3 offset-lg-1 type--right">
              <div className="row">
                <div className="col-6 col-lg-12">
                  <h5 className="type--red">Clients</h5>
                  <ul className="list--unstyled type--white">
                    <li>META+LAB</li>
                    <li>CSU Northridge</li>
                  </ul>
                  <h5 className="type--red">Tech Stack</h5>
                  <ul className="list--unstyled type--white">
                    <li>JavaScript</li>
                    <li>Vue/React/React Native</li>
                    <li>PHP, HTML &amp; CSS</li>
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
                        href="https://itdocs.csun.edu/metaphor"
                        target="_blank"
                      >
                        CSUN Metaphor{" "}
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
      </section>

      <section
        className="bg--white"
        style={{ paddingTop: "50px", paddingBottom: "100px" }}
      >
        <div className="container-fluid scroll--horizontal">
          <div className="row nowrap">
            <div
              className="col-10 col-sm-6 col-md-5 offset-md-1"
              style={{ maxWidth: "470px" }}
            >
              <img className="img--fluid" src="/imgs/profiles.png" alt="" />
              <br />
              <br />
              <h5>Faculty Profiles</h5>
              <p>
                Provides CSUN faculty members with a professional and
                customizable web presence to enhance communication and
                collaboration among professors, and researchers.
              </p>
            </div>
            <div
              className="col-10 col-sm-6 col-md-5"
              style={{ maxWidth: "470px" }}
            >
              <img className="img--fluid" src="/imgs/udwpe.png" alt="" />
              <br />
              <br />
              <h5>Upper Division Writing Proficiency Exam</h5>
              <p>
                Commissioned by the Department of Undergraduate Studies, this
                product allows CSUN students to take the Upper Division Writing
                Proficiency Exam electronically.
              </p>
            </div>
            <div
              className="col-10 col-sm-6 col-md-5"
              style={{ maxWidth: "470px" }}
            >
              <img className="img--fluid" src="/imgs/etd.png" alt="" />
              <br />
              <br />
              <h5>Electronic Thesis &amp; Dissertation</h5>
              <p>
                Allows graduate students to submit their thesis and
                dissertations electronically. It creates an end-to-end online
                workflow for the creation and approval of a master’s thesis,
                eliminating the need for paper submissions and manual routing.
              </p>
            </div>
            <div
              className="col-10 col-sm-6 col-md-5"
              style={{ maxWidth: "470px" }}
            >
              <img className="img--fluid" src="/imgs/matty.png" alt="" />
              <br />
              <br />
              <h5>Ask Matty</h5>
              <p>
                Ask Matty is a chat bot resource dedicated to answering
                questions about enrollment, clubs, organizations and other
                frequently asked campus questions.
              </p>
            </div>
            <div
              className="col-10 col-sm-6 col-md-5"
              style={{ maxWidth: "470px" }}
            >
              <img className="img--fluid" src="/imgs/eas.png" alt="" />
              <br />
              <br />
              <h5>Electronic Assessment System</h5>
              <p>
                Allows students to submit copies of their assignments for future
                course, program, and University assessment, which helps the
                university meet student learning objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg--gray" style={{ paddingTop: "100px" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <h2>Research</h2>
            </div>
            <div className="col-lg-7 offset-lg-1">
              <p className="emphasis type--gray-dark">
                Our largest user demographic was college students from
                the ages of 18-24, which made up 43.7% of our total active
                users. We conducted a small user study and learned that in
                addition to a lack of cohesive design, which was making our
                users frustrated, we also needed to address a sub par mobile
                experience which was becoming a major pain point for our users.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg--gray"
        style={{ paddingTop: "50px", paddingBottom: "100px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="row">
                <div className="col-sm-6 col-lg-12">
                  <h2>18-24</h2>
                  <p>Target Market Age</p>
                  <br />
                </div>
                <div className="col-sm-6 col-lg-12">
                  <h2>43.7%</h2>
                  <p>% of Total Users</p>
                  <br />
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <p className="emphasis type--gray-dark">
                <em>
                  “It's frustrating. I really wish I could use my phone to
                  quickly checkout information, but it's almost impossible to
                  use on my phone”.
                </em>
              </p>
              <p>
                <strong>Rahil Hashim</strong>
                <br />
                <strong>Sociology Major</strong>
              </p>
            </div>
            <div className="col-lg-3">
              <p className="emphasis type--gray-dark">
                <em>
                  “There isn’t much aesthetic consistency. I'm always concerned
                  if they're all official applications because they look so
                  different”.
                </em>
              </p>
              <p>
                <strong>Jasmine Beeman</strong>
                <br />
                <strong>Graphic Design Major</strong>
              </p>
            </div>
            <div className="col-lg-3">
              <p className="emphasis type--gray-dark">
                <em>
                  “Honestly, the worst part is not having access to any of these
                  resources on the go”.
                </em>
              </p>
              <p>
                <strong>Edgar Limon</strong>
                <br />
                <strong>Business Administration Major</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg--white" style={{ paddingTop: "100px" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <h2>Approach</h2>
            </div>
            <div className="col-lg-7 offset-lg-1"></div>
          </div>
        </div>
      </section>

      <section
        className="bg--white"
        style={{ paddingTop: "50px", paddingBottom: "100px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div
                className="bg--red"
                style={{
                  height: "200px",
                  borderRadius: "12px",
                  backgroundImage: "url(/imgs/type.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              ></div>
              <br />
              <h5>1. Branding &amp; Identity</h5>
              <p className="emphasis type--gray-dark">
                We wanted the experience to be seamless across all our products,
                so we focused heavily on reinforcing campus branding.
              </p>
            </div>
            <div className="col-lg-4">
              <div
                className="bg--navy"
                style={{
                  height: "200px",
                  borderRadius: "12px",
                  backgroundImage: "url(/imgs/grid.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              ></div>
              <br />
              <h5>2. Mobile Responsive</h5>
              <p className="emphasis type--gray-dark">
                We architected everything from the ground up to transform the
                mobile &amp; desktop user experience.
              </p>
            </div>
            <div className="col-lg-4">
              <div
                className="bg--gray-dark"
                style={{
                  height: "200px",
                  borderRadius: "12px",
                  backgroundImage: "url(/imgs/components.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              ></div>
              <br />
              <h5>3. UI Components</h5>
              <p className="emphasis type--gray-dark">
                We crafted every component to have enough flexibility to be
                reusable, but also gave each product its own uniqueness.
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
                src="/imgs/results.png"
                alt="CSUN Metaphor"
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
