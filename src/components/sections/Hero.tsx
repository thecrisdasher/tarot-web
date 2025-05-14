import { Button } from "../shared/Button";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Numbers } from "./Numbers";

export const Hero = () => {
  return (
    <section className="relative pt-32 lg:pt-36">
      <Container className="flex flex-col gap-10 lg:gap-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <div className="group relative overflow-hidden rounded-3xl">
            <img
              src="https://videos.openai.com/vg-assets/assets%2Ftask_01jv6hbjzxf1frstc0sapp70q6%2F1747197568_img_0.webp?st=2025-05-14T03%3A14%3A24Z&se=2025-05-20T04%3A14%3A24Z&sks=b&skt=2025-05-14T03%3A14%3A24Z&ske=2025-05-20T04%3A14%3A24Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=vluy38swT4GKgh9NMEei04TA%2BbutDkFZrVWdOlfhZuI%3D&az=oaivgprodscus"
              alt="Hero image 1"
              width={2350}
              height={2359}
              className="w-full h-[500px] object-cover filter brightness-75 transition-all duration-500 group-hover:scale-110 group-hover:brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
              <h3 className="text-2xl font-semibold text-white mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Amarres de Amor</h3>
              <p className="text-gray-200 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                Un ritual ancestral que une dos almas en un vínculo eterno, despertando la pasión y el deseo más profundo. Nuestros amares son realizados con elementos naturales y bendecidos por la luna.
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-3xl">
            <img
              src="https://videos.openai.com/vg-assets/assets%2Ftask_01jv6fx1veftk9fsn1jp81weq4%2F1747196040_img_0.webp?st=2025-05-14T02%3A19%3A25Z&se=2025-05-20T03%3A19%3A25Z&sks=b&skt=2025-05-14T02%3A19%3A25Z&ske=2025-05-20T03%3A19%3A25Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=%2FtZJt9C1maWx63RXxI4K%2F5d%2F%2BxRMM%2FeQsR3aENC4dmE%3D&az=oaivgprodscus"
              alt="Hero image 2"
              width={2350}
              height={2359}
              className="w-full h-[500px] object-cover filter brightness-75 transition-all duration-500 group-hover:scale-110 group-hover:brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
              <h3 className="text-2xl font-semibold text-white mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Endulzamientos</h3>
              <p className="text-gray-200 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                Rituales poderosos que suavizan corazones endurecidos, eliminando rencores y abriendo caminos para la reconciliación. Utilizamos miel, azúcar y esencias especiales para endulzar las relaciones.
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-3xl">
            <img
              src="https://videos.openai.com/vg-assets/assets%2Ftask_01jv5xm9fnek2stagg6s8cdpek%2F1747176884_img_0.webp?st=2025-05-14T01%3A32%3A34Z&se=2025-05-20T02%3A32%3A34Z&sks=b&skt=2025-05-14T01%3A32%3A34Z&ske=2025-05-20T02%3A32%3A34Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=Sgwm1lbYLmq8nDV8UrgIrdlAcRhajg%2Bjzh5tUTN3HgI%3D&az=oaivgprodscus"
              alt="Hero image 3"
              width={2350}
              height={2359}
              className="w-full h-[500px] object-cover filter brightness-75 transition-all duration-500 group-hover:scale-110 group-hover:brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
              <h3 className="text-2xl font-semibold text-white mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Limpiezas Energéticas</h3>
              <p className="text-gray-200 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                Purificación espiritual que elimina energías negativas, maldiciones y trabajos oscuros. Nuestros rituales de limpieza utilizan hierbas sagradas y velas consagradas para restaurar tu energía vital.
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col items-center text-center max-w-3xl mx-auto">
          <h1 className="text-heading-1 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold">
            Empower Your Business
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-red-900 ml-2">
              with AI{" "}
            </span>
          </h1>
          <Paragraph className="mt-8">
            Our AI SaaS platform seamlessly integrates with your existing
            workflows to deliver real‑time insights, intelligent automation, and
            data‑driven decision-making. Experience a future where your business
            runs smarter, faster, and more efficiently.
          </Paragraph>
          <div className="mt-10 w-full flex max-w-md mx-auto">
            <div className="flex sm:flex-row flex-col gap-5 w-full">
              <form
                action="#"
                className="py-1 pl-6 w-full pr-1 flex gap-3 items-center text-heading-3
                                          shadow-lg shadow-box-shadow border border-box-border
                                          bg-box-bg rounded-full ease-linear focus-within:bg-body
                                          focus-within:border-purple-900"
              >
                <span className="min-w-max pr-2 border-r border-box-border">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
                    />
                  </svg>
                </span>
                <input
                  type="email"
                  placeholder="johndoe@gmail.com"
                  className="w-full py-3 outline-none bg-transparent"
                />
                <Button className="min-w-max text-white">
                  <span className="relative z-[5]">Get Started</span>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Container>
      <Numbers />
    </section>
  );
};
