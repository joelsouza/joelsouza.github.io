import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <article>
      <Head>
        <meta name="theme-color" content="#1c2321ff" />
      </Head>
      <section className="hero">
        <header>
          <h1>Hi, I&apos;m Joel</h1>
          <p>
            a passionate full-stack developer from Brazil.{' '}
            <span>I know Ruby and how to play guitar.</span>{' '}
            <span>I can write NodeJS and React, and how to <a href="https://www.strava.com/athletes/56494818" target='_blank'>run</a> 21km in ~1h30min.</span>{' '}
            <span>I am currently learning Elixir and having fun with <a href="https://photos.app.goo.gl/t6jCZbLi894TkZj89" target='_blank'>my family</a>, work, and stay focused with so many noise.</span>
          </p>
        </header>
      </section>
      <section className="intro">
        <div className="container mx-auto">
          <div className="bio">
            <p>
              I had basically become the person whose life I had dreamed of living as a teenager.
            </p>
            <p>
              <a href="https://photos.app.goo.gl/WbgTh1NpHeff8Q7F9" target='_blank'>Since 2007</a>, I have been employed as a web developer.
              I had started my career trying to make PNG alpha channel work on IE6 at the beginning of the second browser. At that time, I was following <a href="https://www.webstandards.org/" target='_blank'> the Web Standards</a> best practices, and in 2017 started my journey as a remote developer on <a href="https://drl.io/play" target='_blank'>Drone Racing Simulator</a> project.
            </p>
          </div>
        </div>
      </section>
      <section className="photo">
        <div className="container mx-auto">
          <figure className="relative">
            <Image src={'/me.jpg'} width={550} height={1142} alt="Joel Souza" />
          </figure>
        </div>
      </section>
    </article>
  )
}
