export default function AboutPage() {
    return (
        <div className="m-12">
            <h1 className="text-2xl text-blue-400 font-bold">
                About
            </h1>
            <p className="text-base text-gray-700 dark:text-gray-300" style={{ whiteSpace: "pre-wrap" }}>
{`This page was honestly a huge undertaking, rivaling some of my projects detailed within the site.

Built on Next.js, I've created this application to act as an easy-to-use directory of all of my projects and exhibition of my various programming adventures.
While building this application, I got to get familiar with Next.js's intituitive paging and API system.
Honestly, the most surprising part of building this application is how, even in something as simple as developing a gallery of my favorite projects, I was able to find ways to apply my skills and tackle new issues in novel and interesting ways I wouldn't have expected.
    
As for the environment, this page is hosted on an Ubuntu installation with a cloud service provider.
Utilizing nginx I am able to reverse proxy all of my hosted projects, this portfolio page, and other necessary services to provide my own environment for all of my applications on a single domain.
With the reverse proxy in place, I have dockerized all of my applications/required services and orchestrated them with docker-compose to route network traffic to the proper locations securely.

Due to the nature of the hosted environment, SSL had to be manually configured to ensure encrypted traffic between users and the server. This could have been avoided if going with an application hosting environment such as heroku, gcp, azure, or aws but honestly it was just cheaper to do it myself if I was going to be hosting multiple applications.
I hope you've enjoyed checking out my site, I'll be regularly updating it as I create new projects and delve deeper into new technologies.`}
            </p>
        </div>
    )
}