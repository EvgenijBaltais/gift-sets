import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />/*
            <link rel="stylesheet" href="https://maot.ru/remote/chat/js/plugins/jquery-ui-1.13.2/jquery-ui.min.css"></link>
            <script src = "https://maot.ru/remote/chat/js/jquery-3.3.1.min.js"></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                  m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                  (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
        
                  ym(1111111111111, "init", {
                        clickmap:true,
                        trackLinks:true,
                        accurateTrackBounce:true,
                        webvisor:true
                  });
                `,
              }}
            />
            <noscript>
              <div>
                <img src="https://mc.yandex.ru/watch/7703674" style={{ position:'absolute', left:'-9999px' }} alt="" />
              </div>
            </noscript>*/
      </body>
    </Html>
  )
}