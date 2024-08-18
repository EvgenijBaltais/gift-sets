import Head from 'next/head'

export default function About (props){

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
					<h2 className = "secondary-h2 section">О нас и нашем подходе</h2>
					<div className = "contacts-section section">
						<p className = "simply-text"><a href= "/" className = "simply-link">Bluebeans.ru</a> - интернет-магазин кофе в зернах, созданный любителями для любителей.</p>
						<p className = "simply-text simply-text-padding bold-text-600">Пару слов о правилах и политике нашего магазина. У нас:</p>
						<ul className = "our-politics">
							<li className = "our-politics-item simply-text">только оригинальный товар;</li>
							<li className = "our-politics-item simply-text">индивидуальный подход к каждому клиенту;</li>
							<li className = "our-politics-item simply-text">гибкие условия доставки;</li>
							<li className = "our-politics-item simply-text">возврат денег, если товар оказался ненадлежащего качества (без чеков, достаточно просто фото);</li>
							<li className = "our-politics-item simply-text">в спорных ситуациях принимаем сторону клиента;</li>
							<li className = "our-politics-item simply-text">бережно храним персональные данные и не мучаем клиентов маркетинговым спамом;</li>
							<li className = "our-politics-item simply-text">программа лояльности для постоянных клиентов, а также акции и скидки;</li>
						</ul>
						<p className = "simply-text bold-text-600">Заказывайте ваш любимый кофе и оставайтесь с нами!</p>
						<p className="simply-text">Если вы хотите сделать заказ - вот <a href = "/catalog" className = "simply-link">наш каталог</a></p>
						<p className="simply-text">Вопросы, пожелания или предложения? → <a href = "mail@bluebeans.ru" rel="nofollow" className = "simply-link">mail@bluebeans.ru</a></p>
					</div>
				</main>
			</>
        )
    }