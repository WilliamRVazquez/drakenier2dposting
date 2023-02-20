import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type='image/ico' href="/logo.ico"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" />        
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
      
    </Html>
  )
}
