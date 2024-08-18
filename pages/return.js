import Head from 'next/head'

export default function Return(props){

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
				<h2 className = "secondary-h2 section">Условия возврата</h2>
					<div className = "section return-section">
						<p className = "simply-text">Мы предлагаем клиентам гибкие условия возврата. Если доставленный товар оказался ненадлежащего качества, то мы готовы обменять его или вернуть деньги.</p> 
						<p className = "simply-text">Если вы остались недовольны качеством товара или оказанной услугой, то сообщите нам об этом любым способом по любому из указанных контактов. Мы идентифицируем вас как нашего покупателя, ответим и быстро перечислим деньги.</p>
						<p className = "simply-text">Мы рассматриваем все негативные отзывы и учитываем все нарекания, чтобы стать лучше.</p>
					</div>
				</main>
			</>
        )
    }