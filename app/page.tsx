import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="m-12 flex flex-row justify-between items-start w-auto">
      <div className="lg:w-1/2 xl:w-1/3">
        <h1 className="text-5xl font-bold">
          Welcome!
        </h1>
        <p className="ml-1 text-xl text-gray-700 dark:text-gray-300" style={{ whiteSpace: "pre-wrap" }}>
          {`I'm Solomon and this is my developer portfolio page. Within, you'll find my favorite projects I've put together on display. In addition, I've added smaller projects I've done as tech demos that don't necessarily add to an entire individual project, but I still feel are necessary to share.

I'm currently in the market for roles in the full stack dev or DevOps career path. Either fully remote or in the Minneapolis, MN area is most ideal but if the offers right who knows where I might end up. I work best with smaller teams that work at a fast pace and have a passion for cranking code, but I can fly solo just as well. One of my favorite things about small team and solo development is really having to dive deep to expand your knowledge to fill all the gaps and release a fantastic product.

My languages include Rust, C++, C#, Python, JS, TS, Bash, and SQL. Rust has quickly become my favorite language. I'm not sure if it's the feeling of traversing a new frontier of software development and having to figure out the solution to my issues with little hand holding that drives me to love Rust so much, but it does make every project a new learning experience. In other languages, if I have an issue I'll be able to search on StackOverflow for a solution, but with Rust that doesn't seem to be the case. Call it masochism, but that lack of available answers and having to provide novel solutions to my own problems just makes finishing that feature I've been working on feel so much better.

If you have any questions, comments, or inquiries, please reach out through Linkedin.`}
        </p>
      </div>
      <div className="hidden xl:flex flex-col w-1/3">
        {/* <picture className="w-96">
          <Link href="https://www.codewars.com/users/sollambert">
            <img src="https://www.codewars.com/users/sollambert/badges/large" alt="Codewars badge" />
          </Link>
        </picture>
        <picture className="w-96"><img src="https://github-readme-stats.vercel.app/api?username=sollambert&show_icons=true&count_private=true&theme=tokyonight"/></picture>
        <picture className="w-96"><img src="https://github-readme-stats.vercel.app/api/top-langs/?username=sollambert&langs_count=6&hide_title=true&layout=compact&hide=HTML,CSS&theme=vision-friendly-dark" /></picture> */}
      </div>
    </div>
  )
}
