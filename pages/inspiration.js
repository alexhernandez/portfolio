import Head from 'next/head';
import Link from 'next/link';

export default function Inspiration() {
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
                        <li><Link href="/portfolio"><a>Portfolio</a></Link></li>
                        <li><Link href="/articles"><a>Articles</a></Link></li>
                        <li><Link href="/inspiration"><a className="active">Inspiration</a></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section style={{paddingBottom: "100px"}}>
        <div className="container">
            <div className="row type--center justify-content-center">
                <div className="col-sm-12">
                    <h2>Words of Wisdom</h2>
                    <br/><br/><br/>
                </div>
                <div className="col-sm-4">
                    <blockquote>
                        <p className="type--gray-dark intro">To live is to risk it all. Otherwise you're just an inert chunk of randomly assembled molecules drifting wherever the universe blows you.</p>
                        <footer>Rick Sanchez, Rick &amp; Morty</footer>
                    </blockquote>
                </div>
                <div className="col-sm-4">
                    <blockquote>
                        <p className="type--gray-dark intro">It ain’t about how hard you hit. It’s about how hard you can get hit and keep moving forward. How much you can take and keep moving forward. That’s how winning is done!</p>
                        <footer>Rocky Balboa</footer>
                    </blockquote>
                </div>
                <div className="col-sm-4">
                    <blockquote>
                        <p className="type--gray-dark intro">The danger is not to set your goal too high and fail to reach it. It’s to set your goal too low and reach it.</p>
                        <footer>Georges St-Pierre, UFC Welterweight Champion</footer>
                    </blockquote>
                </div>
                <div className="col-sm-12">
                    <blockquote>
                        <p className="type--gray-dark intro">He who says he can and he who says he can't are both usually right.</p>
                        <footer>Will Smith, The Pursuit of Happyness</footer>
                    </blockquote>
                </div>
                <div className="col-sm-4">
                    <blockquote>
                        <p className="type--gray-dark intro">When something is important enough, you do it even if the odds are not in your favor.</p>
                        <footer>Elon Musk</footer>
                    </blockquote>
                </div>
                <div className="col-sm-4">
                    <blockquote>
                        <p className="type--gray-dark intro">Empty your mind, be formless, shapeless — like water.</p>
                        <footer>Bruce Lee, A Warrior's Journey</footer>
                    </blockquote>
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
