import { Html, Head, Main, NextScript } from 'next/document'
import { facebookMessenger } from '@/scripts/facebook-messenger';

export default function Document() {
  const title = 'City Dream - це толока для втілення мрій громади';

  return (
    <Html lang={'uk'}>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <meta charSet="utf-8"/>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta property="og:title" content={title}/>
        <meta property="og:site_name" content="City Dream"/>
        <meta property="og:type" content="website"/>
        <meta property="og:image" content="/cd-hero-image.png"/>
        <meta property="og:url" content="https://www.citydream.pp.ua/"/>
        <meta name="description" content="Ми створили цю платформу для ефективної комунікації між бізнесом, місцевою владою та жителями громади."/>
        <meta property="og:description" content="Ми створили цю платформу для ефективної комунікації між бізнесом, місцевою владою та жителями громади."/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="description" content="CityDream – це толока для втілення мрій громади"/>
        <meta property="fb:app_id" content="257953674358265"/>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <body>
      <Main />
      <NextScript />

      <div dangerouslySetInnerHTML={{ __html: facebookMessenger }}/>
      </body>
    </Html>
  )
}
