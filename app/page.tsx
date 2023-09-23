import Image from 'next/image'

export default function Home() {
  return (
      <div className="m-12">
        <h1 className="text-5xl font-bold">
          Welcome!
        </h1>
        <p className="ml-1 text-xl text-gray-700 dark:text-gray-300" style={{ whiteSpace: "pre-wrap" }}>
{`This is my developer portfolio page. Within, you'll find my favorite projects I've put together on display.
In addition, I've added smaller projects I've done as tech demos that don't necessarily add to an entire individual project, but I still feel are necessary to share.
If you have any questions, comments, or inquiries, please reach out through Linkedin.`}
        </p>
      </div>
  )
}
