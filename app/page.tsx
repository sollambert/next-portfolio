import Link from 'next/link'

export default function Home() {
  return (
    <div className="
      mx-12 my-4 h-full w-auto
      flex flex-row justify-between items-start
    ">
      <div className="lg:w-1/2 h-full">
        <h1 className="text-5xl font-bold">
          Welcome!
        </h1>
        <p className="
          ml-1
          text-xl text-gray-700 dark:text-gray-300
          "
          style={{ whiteSpace: "pre-wrap" }}
        >
          {`I'm Solomon and this is my developer portfolio page. Within, you'll find my favorite projects I've put together on display as well as smaller tech demos. Both are necesssary to display the breadth of my knowledge and work.

Currently, I'm seeking a position in the full stack dev or DevOps career path. I work best with smaller, fast-paced teams and have a passion for cranking code, but I can fly solo just as well. One of my favorite things about small team and solo development is really having to dive deep to expand your knowledge to fill all the gaps and release a fantastic product.

I am experienced in the following languages: Rust, C++, C#, Python, JS, TS, Bash, and SQL. Rust has quickly become my favorite language. I'm not sure if it's the feeling of traversing a new frontier of software development and having to figure out the solution to my issues with little hand holding that drives me to love Rust so much, but it does make every project a new learning experience. If I have an issue in other language I'm able to search on StackOverflow for a solution, but with Rust that doesn't seem to be the case. The lack of available answers and having to provide novel solutions to my own problems just makes finishing that feature I've been working on feel so much better.

If you have any questions, comments, or inquiries, please reach out through Linkedin.`}
        </p>
      </div>
      <div className="
        w-1/3
        hidden xl:flex flex-col justify-items-end items-end content-center"
        style={{ minHeight: "50vh", maxHeight: "69vh", height: "100%" }}>
        <div className="flex flex-col items-center">
          <picture className="w-auto mb-4 max-w-md">
            <img className="rounded"
              src="https://media.licdn.com/dms/image/D5603AQE8Q6RE-td6_A/profile-displayphoto-shrink_800_800/0/1678806941868?e=1701302400&v=beta&t=ev1_ziyFAcTN6x1l_Ems8phA5RU9S5f4NdInOlx5QRc"
              alt="Linkedin Profile Picture"
            />
          </picture>
          <picture className="w-auto mb-4 max-w-md">
            <Link href="https://www.codewars.com/users/sollambert">
              <img
                src="https://www.codewars.com/users/sollambert/badges/large"
                alt="Codewars badge"
              />
            </Link>
          </picture>
        </div>
        {/* <picture className="w-auto max-w-md"><img src="https://github-readme-stats.vercel.app/api?username=sollambert&show_icons=true&count_private=true&theme=tokyonight"/></picture> */}
      </div>
    </div>
  )
}
