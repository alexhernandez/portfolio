import Head from "next/head";
import Link from "next/link";

export default function ComingSoon() {
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

      <div class="section">
        <div class="nav">
          <Link href="/">
            <a class="brand">Alex Hernandez</a>
          </Link>
        </div>
        <div class="content">
          <ul class="list-inline social-icons">
            <li>
              <a
                href="https://github.com/alexhernandez"
                class="ion-social-github"
                target="_blank"
                title="GitHub Profile"
              ></a>
            </li>
            <li>
              <a
                href="https://dribbble.com/alexhernandez"
                class="ion-social-dribbble-outline"
                target="_blank"
                title="Dribbble Profile"
              ></a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/alex-hdz"
                class="ion-social-linkedin-outline"
                target="_blank"
                title="LinkedIn Profile"
              ></a>
            </li>
          </ul>
          <p class="intro">Coming Soon. Stay Tuned!</p>
        </div>
      </div>
    </div>
  );
}
