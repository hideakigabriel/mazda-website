import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-[90vw] m-auto">
      {/* Header */}
      <header className="flex flex-row items-center justify-between py-[15px]">
        <Image
          src={"/Green Square Modern Fitness Logo 1.png"}
          width={110}
          height={60}
          alt=""
        />
        <div className="flex gap-4">
          <nav className="flex flex-row">
            <li>
              <a href="">SOBRE</a>S
            </li>
            <li>
              <a href="">SERVIÇOS</a>
            </li>
            <li>
              <a href="">PREÇOS</a>
            </li>
            <li>
              <a href="">EQUIPAMENTOS</a>
            </li>
            <li>
              <a href="">EQUIPAMENTOS</a>
            </li>
          </nav>
          <a href="">REGISTRE-SE</a>
        </div>
      </header>
      <main className="max-w-[90vw] m-auto">
        {/* Hero */}
        <section className="flex flex-row justify-start items-center gap-8">
          <div className="flex flex-col gap-[28px]">
            <span className="text-7xl font-normal">AQUI NÃO SE</span>
            <span className="text-7xl font-normal">TREINA FOFO</span>
            <p className="text-lg">
              Transforme-se na nossa academia! Oferecemos equipamentos modernos,
              <br /> instrutores qualificados e aulas para todos os níveis. Alcance
              seus objetivos <br /> fitness conosco. Experimente hoje!
            </p>
            <div className="flex flex-row items-center justify-center px-7 py-2 w-48 bg-gray-800">
            <a href="" className="text-[32px]">COMEÇAR</a>
            <Image src={"/Arrow 1.png"} width={"10"} height={"5"} alt="" />
            </div>
          </div>
          <Image src={"/pngwing 1.png"} width={"447"} height={"627"} alt="" />
        </section>
      </main>
    </div>
  );
}
