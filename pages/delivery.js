import Head from 'next/head'

export default function Delivery(props){

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
			<h2 className = "secondary-h2 section">Условия доставки</h2>
			<section className = "contacts-section section padding-bottom-2">
				<h3 className = "bold-text-600 underlined-text secondary-h3">
					Для заказов от 2 999 р.
				</h3>
				<p className = "simple-text margin-bottom-10">
					<span className = "bold-text-600">Бесплатная доставка</span> на следующий день или позднее по Москве в пределах МКАД и г. Красногорск.
				</p>
				<p className = "simple-text">
					Курьером или в пункт выдачи Яндекс Доставки, СДЭК, Boxberry.
				</p>
			</section>
			<section className = "contacts-section section padding-bottom-2">
				<h3 className = "bold-text-600 underlined-text secondary-h3">
					Для заказов до 2 999 р.
				</h3>
				<p className = "simple-text margin-bottom-10">
					На следующий день или позднее по Москве в пределах МКАД и г. Красногорск.
				</p>
				<p className = "simple-text">
					Курьером или в пункт выдачи Яндекс Доставки, СДЭК или Boxberry.
				</p>
				<p className = "simple-text">
					<span className = "bold-text-600">Стоимость - 500 рублей.</span>
				</p>
			</section>
			<section className = "contacts-section section padding-bottom-2">
				<h3 className = "bold-text-600 underlined-text secondary-h3">
					Экспресс доставка.
				</h3>
				<p className = "simple-text margin-bottom-10">
					Сегодня по Москве в пределах МКАД и г. Красногорск.
				</p>
				<p className = "simple-text">
					Курьером до двери.
				</p>
				<p className = "simple-text">
					<span className = "bold-text-600">Стоимость - 800 рублей.</span>
				</p>
			</section>
			<section className = "contacts-section section padding-bottom-2">
				<h3 className = "bold-text-600 underlined-text secondary-h3">
					Доставка по Московской области кроме г. Красногорск.
				</h3>
				<p className = "simple-text margin-bottom-10">
					Осуществляется партнерскими службами Яндекс Доставка, СДЭК или Boxberry.
				</p>
				<p className = "simple-text">
					<span className = "bold-text-600">Стоимость - по тарифам службы доставки.</span>
				</p>
			</section>
			<section className = "contacts-section section padding-bottom-3">
				<h3 className = "bold-text-600 underlined-text secondary-h3">
					Доставка по России.
				</h3>
				<p className = "simple-text margin-bottom-10">
					Осуществляется партнерскими службами Яндекс Доставка, СДЭК или Boxberry.
				</p>
				<p className = "simple-text">
					<span className = "bold-text-600">Стоимость - по тарифам службы доставки.</span>
				</p>
			</section>
			<div className = "contacts-section section padding-bottom-2">
				<p className = "simple-text bold-text-600 margin-bottom-10">
					Для заказов от 8 000 рублей предоставляем скидки и особые условия доставки!
				</p>
			</div>
			<div className = "contacts-section section padding-bottom-2">
				<p className = "simple-text bold-text-600 margin-bottom-10">
					Будем рады ответить на все вопросы по телефону и в мессенджерах.
				</p>
			</div>

			</main>
			</>
        )
    }