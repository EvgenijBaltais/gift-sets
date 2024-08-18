import Head from 'next/head'

export default function Catalog (props){

        return (
            <>
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title></title>
                    <link rel="canonical" href="" />
                    <link rel="shortcut icon" href="/favicon.svg" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link rel="manifest" href="/site.webmanifest" />
                    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                    <meta name="msapplication-TileColor" content="#ffc40d" />
                    <meta name="theme-color" content="#ffffff" />
                    <meta name="description" content="" />
                    <meta name="keywords" content="" />
                    <meta property="og:url" content="" />
                    <meta property="og:title" content="" />
                    <meta property="og:description" content="" />
                    <meta property="og:type" content="website" />
                    <meta property="og:image" content="/fon.jpg" />
                    <meta property="og:image:type" content="image/jpg" />
                    <meta property="og:image:width" content="400" />
                    <meta property="og:image:height" content="300" />
                    <meta property="og:image:alt" content="" />
                    <meta name="format-detection" content="telephone=no" />
                </Head>

				<main className = "wrapper non-main-wrapper">
					<h2 className = "secondary-h2 section">Каталог</h2>

					<div className="catalog-info section">
						<p className = "simply-text">Есть вопросы по ассортименту или доставке? Мы на связи и будем рады проконсультировать вас
							<br />Хотите получить консультацию или уточнить детали?
							<br />Ждем ваших заявок, а также готовы ответить на все вопросы через мессенджеры и по телефону.
						</p>
					</div>

				</main>
		</>
        )
    }