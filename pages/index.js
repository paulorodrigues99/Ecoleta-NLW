import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Ecoleta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="page-home">
        <div class="content">
          <header>
            <img src="/assets/logo.svg" alt="Logomarca" />
            <a href="#">
              <span></span>
              Cadastre um ponto de coleta
            </a>
          </header>
          <main>
            <h1>Seu marketplace de coleta de resíduos</h1>

            <p>
              Ajudamos pessoas a encontrarem pontos de coleta de forma
              eficiente.
            </p>

            <a href="#">
              <span></span>
              <strong>Pesquisar pontos de coleta</strong>
            </a>
          </main>
        </div>
      </div>
      <style jsx>{`
        a {
          text-decoration: none;
        }
        
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          color: var(--title-color);
          font-family: 'Ubuntu', sans-serif;
        }
        
        #page-home {
          height: 100vh;
          background: url('../assets/home-background.svg') no-repeat;
          background-position: 35vw bottom;
        }
        
        #page-home .content {
            width: 90%;
            max-width: 1100px;
            height: 100%;
        
            margin: 0 auto;
        
          display: flex;
          flex-direction: column;
        }
        
        #page-home header {
          display: flex;
        
          align-items: center;
          justify-content: space-between;
          margin-top: 48px;
        }
        
        #page-home header a {
          display: flex;
        
          color: var(--title-color);
          font-weight: 700;
        }
        
        #page-home header a span {
          margin-right: 16px;
          display: flex;
          background: url('../assets/log-in.svg');
        
          width: 20px;
          height: 20px;
        }
        
        #page-home main {
          display: flex;
          flex-direction: column;
          justify-content: center;
        
          flex: 1;
          max-width: 560px;
          height: 600px;
        }
        
        #page-home main h1 {
          font-size: 54px;
        }
        
        #page-home main p {
          font-size: 24px;
          line-height: 38px;
          margin-top: 24px;
        }
        
        #page-home main a {
          display: flex;
          align-items: center;
        
          width: 100%;
          max-width: 360px;
          height: 72px;
        
          margin-top: 40px;
        
          background: var(--primary-color);
          border-radius: 8px;
        
          transition: 400ms;
        
        }
        
        #page-home main a:hover {
          background-color: #2fb86e;
        }
        
        #page-home main a span {
          width: 72px;
          height: 72px;
        
          background-color: rgba(0, 0, 0, 0.08);
          border-top-left-radius: 8px;
          border-bottom-left-radius: 8px;
        
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        #page-home main a span::after {
            content: "";
            background-image: url('../assets/search.svg');
        
            width: 20px;
            height: 20px;
        }
        
        #page-home main a strong{
            flex: 1;
            color: #fafafa;
            text-align: center;
        }
        
        @media(max-width: 900px){
            #page-home {
                background-position-x: 70vw;
            }
            #page-home .content{
                align-items: center;
                text-align: center;
            }
        
            #page-home header a {
                position: absolute;
                bottom: 48px;
        
                left: 50%;
                transform: translateX(-50%);
            }
        
            #page-home main {
                align-items: center;
            }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>

      <style jsx global>{`
        :root {
          --title-color: #322153;
          --primary-color: #34cb79;
        }
        
        * {
          margin: 50;
          padding: 50;
        }
        
        html {
          font-family: 'Roboto', sans-serif;
        }
        
        body {
          background: #f0f0f5;
          -webkit-font-smoothing: antialiased;
        }
      `}</style>
    </div>
  );
}
