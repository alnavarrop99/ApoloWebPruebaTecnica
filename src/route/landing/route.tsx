import { Link, useLoaderData } from "react-router-dom"
import { PARSE } from "~/route"
import { loader } from "./loader";
import clsx from "clsx";

export { loader }

export const Landing = () => {
  const data = useLoaderData() as Awaited<ReturnType<typeof loader>>

  if('error' in data) return <>Error</>

  return <main aria-label="welcome page" className="place-self-center [&_p]:opacity-90 [&_:where(p,span)]:text-2xl/loose [&_p]:text-center [&_h1]:text-4xl [&_.btn]:h-full [&_.btn]:text-2xl [&_.btn]:my-3 py-16 [&_.badge]:font-bold [&_.badge]:h-10 px-4">

    <section aria-label="welcome" className="hero bg-base-100">
      <div className="hero-content text-center">
        <div className="max-w-full">
          <h1>Rick and Morty API</h1>
          <p className="py-6">
            This is my little project with <span className="badge badge-success">Rick and Morty API</span>. I expect all be <b>OK</b>, for home. Enjoy this project and greeting from here. 
          </p>
          <Link to={`/${PARSE['app']}`} className="btn glass">Get started</Link>
        </div>
      </div>
    </section>

    <div className="divider" />

    <section aria-label="build tools" className="hero bg-gray-500/10">
      <div className="hero-content flex-col">
        <img src={data[0].image || '/R&M.svg'} className={clsx("rounded-lg shadow-2xl", { 'opacity-40': !data[0].image })} />
        <div>
          <h1>Build tools ...</h1>
          <p className="py-6">
            Make with <b>love</b> and <span className="badge badge-primary">React</span> <span className="badge badge-ghost">React-Router</span> <span className="badge badge-secondary">Vite</span> and <span className="badge badge-error">msw</span>.
          </p>
          <div className="flex justify-between items-center">
            <p className="underline font-bold">Are you sigin?</p>
            <Link to={`/${PARSE['app']}`} className="btn btn-outline">Login now</Link>
          </div>
        </div>
      </div>
    </section>

    <div className="divider" />

    <section aria-label="steps" className="[&_.badge]:font-bold space-y-4 bg-base-100">
      <h1 className="text-center">Steps</h1>
      <p>It's really easy to understand, all are in <span className="badge badge-warning">local storage</span>, don't worry</p>
      <ul className="steps steps-vertical">
        <li className="step step-primary"><p><b>Welcome</b>.</p></li>
        <li className="step step-primary"><p><b>Sigin</b> | <b>Login</b>.</p></li>
        <li className="step"><p><b>Search</b> any characters</p>.</li>
        <li className="step"><p><b>Create</b> or <b>Edit</b> anything else.</p></li>
      </ul>
    </section>

    <div className="divider" />

    <section aria-label="styles tools">
    <div className="card bg-gray-500/10 image-full w-full shadow-xl min-h-[12rem]">
      <div className="carousel rounded-box size-full [&_img]:w-full h-full">
        <div className="carousel-item w-1/2">
          <img src={data[1].image || '/R&M.svg'} alt="carrusel-image" className={clsx({ 'opacity-40': !data[1].image })} />
        </div>
        <div className="carousel-item w-1/2">
          <img src={data[2].image || '/R&M.svg'} alt="carrusel-image" className={clsx({ 'opacity-40': !data[2].image })} />
        </div>
      </div>
      <div className="card-body gap-8">
        <h1 className="card-title text-white w-fit ms-auto">... Awesome styles</h1>
        <p>All system was make with awesome tools: <span className="badge badge-ghost">storybook</span> <span className="badge badge-info">tailwindcss</span> <span className="badge badge-success">lordicons</span> and <span className="badge badge-secondary">daisyUI</span> </p>
        <div className="card-actions justify-start">
          <Link to={`/${PARSE['app']}`} className="btn">Sigin now</Link>
        </div>
      </div>
    </div>

    </section>

  </main>
}

export default Landing
