import Image from 'next/image';
import "./../../public/css/home.css";
import AstroFeliz from "./../../public/assets/Amigo-ASTRO.png"
import AstroCajado from "./../../public/assets/ASTRO-CAJADO.png"
import AstroAtendente from "./../../public/assets/ASTRO-atendente.png"
import Urso from "./../../public/assets/Urso-perdido.png"
import Vlibras from "./../../public/assets/exemploVLIBRAS.png"
import Lupa from "./../../public/assets/lupa.png"
import Marketing from "./../../public/assets/image1.svg"
import Vendas from "./../../public/assets/image2.svg"
import AtCliente from "./../../public/assets/image3.svg"
import Sustentabilidade from "./../../public/assets/image4.svg"

export default function Home() {
  return (
    <>
      <section className='section-bg-escuro'>
        <div className='container flex'>
          <div className='text1'>
              <h2>O que há de novo para a Salesforce?</h2>
              <h1>EXPLORE O NOVO!</h1>
          </div>

          <Image src={AstroFeliz} alt='Personagem Astro correndo'/>
        </div>
      </section>





      <section>

        <div className='container flex direction'>
            <Image src={AstroCajado} alt='Personagem Astro ascenando com um cajado'/>
          

          <div className='text2'>
            <h3>Agora nosso amigo pode te <br /> ajudar a conhecer mais sobre <br /> nós!</h3>

            <p>Nosso amigo pode te  guiar na sua jornada pelo mundo Salesforce! <br />
              Se voce quiser saber mais, é só clicar no botão abaixo e se aventurar como um <br /> verdadeiro Trailbrazer!</p>
              
            <div className='botao'>
              <button>Acompanhe nosso amigo aqui</button>
            </div>
          </div>
        </div>

      </section>



      <section className='section-bg-escuro'>

        <div className="container section-busca">
          <h2>Nos diga, qual a sua área de interesse?</h2>

          <div className='barra-pesquisa'>
            <p>Pesquise aqui</p>

            <Image src={Lupa} alt='Imagem de uma lupa'/>
          </div>

          <h3>Áreas mais pesquisadas</h3>


          <div className='flex-article'>
            <article>
              <Image src={Marketing} alt='Imagem do peronsagem astro com itens relacionados a marketing' />

              <h4>Marketing</h4>
            </article>

            <article>
              <Image src={Vendas} alt='Imagem do peronsagem astro com itens relacionados a marketing' />

              <h4>Vendas</h4>
            </article>

            <article>
              <Image src={AtCliente} alt='Imagem do peronsagem astro com itens relacionados a marketing' />

              <h4>Atend. ao Cliente</h4>
            </article>

            <article>
              <Image src={Sustentabilidade} alt='Imagem do peronsagem astro com itens relacionados a marketing' />

              <h4>Sustentabilidade</h4>
            </article>
          </div>
        </div>
      </section>

      <section>

            <div className='container flex direction'>

              <div className='text2'>
                <h3>Experimente nosso novo<br /> chatbot!</h3>

                <p>Experimente tirar suas dúvidas sobre o universo Salesforce com rapidez, agilidade e precisão!</p>

                <div className='botao'>
                  <button>Acesse nosso chatbot aqui</button>
                </div>
              </div>

              <Image src={AstroAtendente} alt='Personagem Astro atendendo o telefone' className='astro-atendente'/>
            </div>

      </section>

      <section className='section-bg-escuro'>

            <div className='container flex direction'>

              <div className='text1'>
                <h3>MUITO MAIS<br /> ACESSEBILIDADE</h3>

                <p>Experimente uma nova forma de navegar em nosso site utilizando o VLibras para acessibilidade a pessoas com deficiência auditiva. Estamos comprometidos em tornar nossa plataforma inclusiva e acessível a todos.</p>
              </div>

              <Image src={Vlibras} alt='Personagem do assistente virtual online VLibras' className='vlibras'/>
            </div>

      </section>


      <section>
        <div className='section-urso'>
          <div className='container flex direction urso'>

            <div className='text2'>
              <h3>Ainda está com<br /> dúvidas?</h3>

              <p>Entre em contato com nossa equipe</p>

            </div>
          </div>
          <div className="style-form">

            <form action="">
              <label htmlFor="nome">Nome:</label>
              <input type="text" name="name"/><br/>

              <label htmlFor="email">E-mail:</label>
              <input type="email" name="email"/><br/>

              <div className="local">
                <div className='tres-forms'>
                  <label htmlFor="cidade">Cidade:</label>
                  <input type="text" name="cidade" className='cidade-interesse'/> 
                </div>

                <div className='tres-forms'>
                  <label htmlFor="estado">Estado:</label>
                  <input type="text" name="estado" className='estado'/>
                </div>

                <div className='tres-forms'>
                  <label htmlFor="area-interesse">Área de interesse:</label>
                  <input type="text" name="area de interesse" className='cidade-interesse'/> 
                </div>
              </div>

            </form>

            <div className="perdido">
              <button>Enviar</button>
              <Image src={Urso} alt='personagem de um urso com um mapa na mão'/>
            </div>
          </div>
        </div>
      </section>
     
    </>
  );
}
