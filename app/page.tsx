import Image from 'next/image';
import NavBar from '../components/navbar';

export default function Home() {
  return (
    <div>
      <NavBar/>
      
      <div className="flex flex-col items-center min-h-screen bg-gradient-to-t from-gray-900 to-black text-white">
        <main className="container mx-auto px-6 text-center drop-shadow-xl">
          <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-6 mt-14">
            <Image
              src="/images/headshot.jpg"
              alt="Profile picture"
              width={160}
              height={160}
              quality={100}
            />
          </div>

          <h1 className="text-5xl font-bold">
            <span className="bg-gradient-name bg-clip-text text-transparent">Hello, I&apos;m </span>
            <span>Conner Yin</span>
          </h1>
          <p className="text-gray-400 mt-4">I&apos;m a software engineer currently studying at Santa Clara University. Have a look around to see what I&apos;ve been up to!</p>
          <div className="flex justify-center mt-6 space-x-4">
            <a href="mailto:conner.yin@gmail.com" className="w-14 h-14 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center">
              <Image src="/images/gmail.svg" alt="Mail" width={48} height={48} />
            </a>
            <a href="https://www.linkedin.com/in/conneryin" target="_blank" className="w-14 h-14 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center">
              <Image src="/images/linkedin.svg" alt="LinkedIn" width={48} height={48} />
            </a>
            <a href="https://github.com/cyin100" target="_blank" className="w-14 h-14 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center">
              <Image src="/images/github.svg" alt="GitHub" width={48} height={48} />
            </a>
          </div>
          <a href="/files/resume.pdf" target="_blank" className="mt-4 inline-block font-bold py-2 px-4 rounded-full transition duration-300 bg-gradient-name text-white mb-10">
            Resume
          </a>

          <div className="mb-6 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left mx-auto">
            <a
              href="/projects"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Projects{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm text-left sm:text-left opacity-50`}>
                Hackathon and personal projects
              </p>
            </a>

            <a
              href="/experience"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Experience{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm text-left opacity-50`}>
                Professional and leadership experience
              </p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Other{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm text-left opacity-50`}>
                My music, blog, and other fun stuff
              </p>
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}
