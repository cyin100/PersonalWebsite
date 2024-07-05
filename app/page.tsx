import Image from 'next/image';
import NavBar from '../components/navbar';
import Footer from '../components/footer';

const languages = {
  "python": "python-original.svg",
  "java": "java-original.svg",
  "c++": "cplusplus-original.svg",
  "c#": "csharp-original.svg",
  "javascript": "javascript-original.svg",
  "typescript": "typescript-original.svg",
  "html": "html5-original.svg",
  "css": "css3-original.svg",
  "dart": "dart-original.svg",
}

const frameworks = {
  "flutter": "flutter-original.svg",
  "react": "react-original.svg",
  "vue": "vuejs-original.svg",
  "tailwind": "tailwindcss-original.svg",
  "node.js": "nodejs-original.svg",
  "flask": "flask-original.svg",
  "spring": "spring-original.svg",
  "firebase": "firebase-original.svg",
  "mysql": "mysql-original.svg",
}

const tools = {
  "git": "git-original.svg",
  "github": "github.svg",
  "vscode": "vscode-original.svg",
  "jupyter": "jupyter-original.svg",
  "linux": "linux-original.svg",
  "postman": "postman-original.svg",
  "aws": "amazonwebservices-original-wordmark.svg",
  "selenium": "selenium-original.svg",
  "apache": "apache-original.svg",
}

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col items-center min-h-screen bg-gradient-to-t from-gray-900 to-black text-white">
        <main className="container mx-auto px-6 text-center drop-shadow-xl">
          <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-6 mt-14">
            <Image
              src="/images/headshotnew.png"
              alt="Profile picture"
              width={160}
              height={160}
              quality={100}
            />
          </div>

          <h1 className="text-5xl font-bold">
            <span className="bg-gradient-name bg-clip-text text-transparent">Hello, I&apos;m </span>
            <span className="">Conner Yin</span>
          </h1>
          <p className="text-gray-400 mt-4">I&apos;m a software engineer currently studying at Santa Clara University. Have a look around to see what I&apos;ve been up to!</p>
          <div className="flex justify-center mt-6 space-x-4">
            {[
              { title: 'Mail', image: 'gmail.svg', link: 'mailto:conner.yin@gmail.com' },
              { title: 'LinkedIn', image: 'linkedin.svg', link: 'https://www.linkedin.com/in/conneryin' },
              { title: 'GitHub', image: 'github.svg', link: 'https://github.com/cyin100'},
            ].map(({ title, image, link }) => (
              <a key={title} href={link} target="_blank" className="w-14 h-14 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center">
                <Image src={`/icons/${image}`} alt={title} width={48} height={48} />
              </a>
            ))}
          </div>
          <a href="/files/resume.pdf" target="_blank" className="mt-4 inline-block font-bold py-2 px-4 rounded-full transition duration-300 bg-gradient-name text-white mb-10">
            Resume
          </a>

          <div className="mb-6 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left mx-auto">
            {[
              { title: 'Projects', description: 'Hackathon and personal projects', icon: '/icons/github.svg', link: '/projects' },
              { title: 'Experience', description: 'Professional and leadership experience', icon: '/icons/linkedin.svg', link: '/experience' },
              { title: 'Other', description: 'My music, blog, and other fun stuff', icon: '/icons/linkedin.svg', link: 'https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app' },
            ].map(({ title, description, icon, link }) => (
              <a
                key={title}
                href={link}
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target={link.startsWith('http') ? '_blank' : undefined}
                rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <h2 className={`mb-3 text-3xl font-semibold`}>
                  {title}{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    <Image
                      src={icon}
                      alt={title}
                      width={25}
                      height={25}
                      quality={100}
                    />
                  </span>
                </h2>
                <p className={`m-0 max-w-[30ch] text-sm text-left sm:text-left opacity-50`}>
                  {description}
                </p>
              </a>
            ))}
          </div>

          <div className="my-16 group rounded-lg border border-transparent px-10 py-4">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/4 mx-auto">
                <Image
                  src="/images/pineapplecrop.jpg"
                  alt="About Me"
                  width={230}
                  height={300}
                  className="object-cover mx-auto rounded-lg shadow-lg mb-6"
                />
              </div>

              <div className="md:w-3/4 md:p-8">
                <h1 className="text-4xl font-bold md:text-left mb-4">About Me</h1>
                <p className="text-left text-gray-400">
                  Hi, I&apos;m Conner! I&apos;m a software engineer currently pursuing a Bachelors in Computer Science
                  and Engineering at Santa Clara University, graduating December 2024.
                  My primary goal is to spread my love for programming with others and to foster supportive communities.
                  That's why I&apos;m currently leading SCU&apos;s ACM and Competitive Programming clubs,
                  where I plan socials, hackathons, mock interviews, and teach workshops.
                  In the past, I&apos;ve interned at Intel, Roche, and X-Camp Academy, where I&apos;ve worked on full-stack
                  development, cloud and devops engineering, and automation. I&apos;m also excited to be a software engineering
                  intern this summer at Microsoft!
                  Outside of tech, I&apos;m passionate about music composition and production, hiking, and playing
                  social deception games with friends. Please don't hesitate to reach out if you&apos;d like to connect!
                </p>
              </div>
            </div>
          </div>

          <h1 className="text-4xl font-bold underline underline-offset-2 decoration-1 decoration-slate-400">Skills</h1>
          <div className="mt-4 grid text-center md:grid-cols-2 lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left mx-auto">
            {[
              { title: 'Languages', items: languages },
              { title: 'Frameworks', items: frameworks },
              { title: 'Developer Tools', items: tools },
            ].map(({ title, items }) => (
              <div key={title} className='mb-6'>
                <div className="text-2xl font-bold text-center mb-7">{title}</div>
                <div className="grid text-center lg:max-w-5xl lg:w-full lg:mb-0 grid-cols-3 lg:text-left mx-auto md:border-x-2 ">
                  {Object.entries(items).map(([item, image]) => (
                    <div key={item} className="mb-6">
                      <Image
                        src={`/icons/${image}`}
                        alt={item}
                        width={50}
                        height={50}
                        className="object-cover mx-auto rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
