import Head from 'next/head';
import Link from 'next/link';

export default function Portfolio() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <title>Alex Hernandez | Product Designer &amp; Front End Developer</title>
        <meta name="description" content="Los Angeles based Product Designer &amp Front End Developer. I help people design products that transform and elevate their everyday life."/>

        <link rel="shortcut icon" type="image/png" href="/imgs/favicon.png"/>
        <link rel="stylesheet" href="https://unpkg.com/ionicons@4.2.0/dist/css/ionicons.min.css"/>

        <link rel="stylesheet" href="https://use.typekit.net/nmj3qua.css"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro"/>
        <link rel="stylesheet" href="/static/css/bootstrap-reboot.min.css"/>
        <link rel="stylesheet" href="/static/css/bootstrap-grid.min.css"/>
        <link rel="stylesheet" href="/static/css/portfolio.css"/>
      </Head>

      <section className="type--header">
        <div className="container type--center">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <h1 className="type--display">Alex Hernandez</h1>
                    <p className="intro type--gray-dark">Product Designer &amp; Front End Developer based in Los Angeles, CA</p>
                    <ul className="list--unstyled list--inline pills type--red">
                        <li><Link href="/"><a>Snapshots</a></Link></li>
                        <li><Link href="/portfolio"><a className="active">Portfolio</a></Link></li>
                        <li><Link href="/articles"><a>Articles</a></Link></li>
                        <li><Link href="/inspiration"><a>Inspiration</a></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section style={{paddingBottom: "100px"}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <div className="row">
                        <div className="col-sm-12">
                            <div style={{padding: "20px"}}>
                                <div className="row">
                                    <div className="col-sm-12 col-md-9">
                                        <h2><Link href="/metaphor"><a className="type--no-decoration">Metaphor</a></Link></h2>
                                        <p className="type--gray-dark emphasis">A beautiful &amp; versatile design language built for CSU Northridge's web application developers.</p>
                                    </div>
                                    <div className="col-sm-12 col-md-3">
                                        <p className="type--right type--red"><Link href="/metaphor"><a>View Project &rarr;</a></Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div style={{borderTop: "1px solid #ccc", padding: "20px"}}>
                                <div className="row">
                                    <div className="col-sm-12 col-md-9">
                                        <h2>Cronos</h2>
                                        <p className="type--gray-dark emphasis">Real-time vehicle dispatching &amp; retrieval system.</p>
                                    </div>
                                    <div className="col-sm-12 col-md-3">
                                        <p className="type--right type--gray-dark"><em>Coming Soon</em></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div style={{borderTop: "1px solid #ccc", padding: "20px"}}>
                                <div className="row">
                                    <div className="col-sm-12 col-md-9">
                                        <h2>Boardello</h2>
                                        <p className="type--gray-dark emphasis">A collaboration canvas for gathering, sharing &amp; discussing creative inspiration across teams.</p>
                                    </div>
                                    <div className="col-sm-12 col-md-3">
                                        <p className="type--right type--gray-dark"><em>Coming Soon</em></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="bg--red" style={{paddingTop: "150px", paddingBottom: "100px"}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <h1 className="type--white"><div>That’s All Folks.</div><div>Let’s Chat!</div></h1>
                    <p className="type--white intro" style={{borderColor: "#fff"}}>Hi! I'm Alex Hernandez, a designer based in Los Angeles, CA. I enjoy collaborating with brands of any size that have passion and purpose.</p>
                    <p className="type--navy emphasis">Product Designer &middot; Front End Developer &middot; Entrepreneur</p>
                </div>
                <div className="col-lg-3 offset-lg-1 type--right">
                    <h4 className="type--navy">Social</h4>
                    <ul className="list--unstyled list--inline social type--white">
                        <li><a className="icon ion-logo-github" href="https://github.com/alexhernandez" target="_blank"></a></li>
                        <li><a className="icon ion-logo-dribbble" href="https://dribbble.com/alexhernandez" target="_blank"></a></li>
                        <li><a className="icon ion-logo-linkedin" href="https://linkedin.com/in/alex-hdz" target="_blank"></a></li>
                    </ul>

                    <br/>

                    <h4 className="type--navy">Contact</h4>
                    <ul className="list--unstyled type--white">
                        <li><a href="mailto:hi@alejandrohernandez.me">hi@alejandrohernandez.me</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    </div>
  )
}
