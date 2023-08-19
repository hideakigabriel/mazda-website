import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <section className="bg-hero-img h-screen bg-cover relative">
        <header className="px-12 py-8 flex flex-row gap-12 text-4xl">
          <span>Margot Robbie</span>
          <span>Ryan Gosling</span>
        </header>
        <div className="left-0 absolute">
          <div className="px-12 py-8 m-16 flex flex-col items-center gap-32">
            <div>
              <h1 className="text-3xl text-center leading-normal">
                Ela é tudo. <br />
                Ele é o Ken.
              </h1>
            </div>

            <div className="flex flex-col items-center">
              <h2>20 De Julho</h2>
              <p>Somente nos cinemas</p>
              <ul className="my-4 flex flex-row gap-3 items-center">
                <li>
                  <a href="">
                    <Image
                      src={"/tiktok-logo.svg"}
                      width={20}
                      height={20}
                      alt="Tiktok Logo"
                    />
                  </a>
                </li>

                <li>
                  <a href="">
                    <Image
                      src={"/x-twitter-logo.svg"}
                      width={20}
                      height={20}
                      alt="X Twitter Logo"
                    />
                  </a>
                </li>

                <li>
                  <a href="">
                    <Image
                      src={"/instagram-logo.svg"}
                      width={20}
                      height={20}
                      alt="Instagram Logo"
                    />
                  </a>
                </li>

                <li>
                  <a href="">
                    <Image
                      src={"/facebook-logo.svg"}
                      width={20}
                      height={20}
                      alt="Facebook Logo"
                    />
                  </a>
                </li>

                <li>
                  <a href="">
                    <Image
                      src={"/github-logo.svg"}
                      width={20}
                      height={20}
                      alt="Github Logo"
                    />
                  </a>
                </li>
              </ul>

              <div className="flex gap-5 items-center text-lg">
                <a
                  href="https://www.barbiefilme.com.br/"
                  target="_blank"
                  rel=""
                  className="px-8 py-2 bg-[#f21ea9] border-2 border-white rounded-full transform hover:bg-[#db1395] duration-100 cursor-pointer"
                >
                  Compre seu ingresso
                </a>
                <a
                  href="https://www.youtube.com/watch?v=NVIpIMqeJVM"
                  target=""
                  id="iframe"
                  className="px-8 py-2 bg-[#f21ea9] border-2 border-white rounded-full transform hover:bg-[#db1395] duration-100 cursor-pointer"
                >
                  Assista ao trailer
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
