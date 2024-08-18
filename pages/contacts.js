import Head from 'next/head'

export default function Sale (props){

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
					<section className = "section">
						<h2 className = "secondary-h2 section">Контакты для связи</h2>
					<div className = "contacts-section">
						<p className="simply-text">Мы работаем и доставляем кофе в Москве и Московской области.</p>
						<p className="simply-text">Если вы заинтересовались нашим ассортиментом и у вас есть какие-то вопросы, пожелания или предложения, пишите нам через форму:</p></div></section>
					<div className = "form-order">
						<p className = "form-order-title">Отправить заявку</p>
						<p className = "form-order-subtitle">И мы свяжемся с Вами в кратчайшие сроки</p>
						<form className = "order-form" name = "order-form">
							<div className = "form-order-wrapper">
								<div className = "form-order-item">
									<input type = "text" className = "form-order-input" name = "name" placeholder = "Ваше имя" />
								</div>
								<div className = "form-order-item">
									<input type = "text" className = "form-order-input" name = "email" placeholder = "Ваш Email" />
								</div>
								<div className = "form-order-item form-order-item-phone">
									<input type = "text" className = "form-order-input form-order-input-phone" name = "phone" placeholder = "Ваш телефон (обязательно для заполнения)" />
								</div>
								<div className = "form-order-item">
									<textarea className = "form-order-textarea" placeholder = "Текст комментария"></textarea>
								</div>
								<div className="contact-method">
									<p className = "contact-method-title">Какой способ связи для Вас предпочтительнее?</p>
									<div className = "contact-method-form">
										<label className="contact-label">
											<input type="radio" name="radio" checked />
											<span>Телефон</span>
										</label>
										<label className="contact-label">
											<input type="radio" name="radio" />
											<span>Whatsapp</span>
										</label>
										<label className="contact-label">
											<input type="radio" name="radio" />
											<span>Telegram</span>
										</label>
										<label className="contact-label">
											<input type="radio" name="radio" />
											<span>Не важно</span>
										</label>
										<div className = "contact-method-form-2">
											<label className="contact-label">
												<input type="radio" name="radio-2" checked />
												<span>Сообщение</span>
											</label>
											<label className="contact-label">
												<input type="radio" name="radio-2" />
												<span>Звонок</span>
											</label>
										</div>
									</div>
								</div>
								<div className = "form-order-submit">
									<button type = "button" className = "form-order-btn">Отправить!</button>
								</div>
								<div className = "form-order-agree">
									* Нажимая на кнопку "Отправить!", Вы даете согласие на обработку персональных данных
								</div>
							</div>
						</form>
						<p className = "form-choise">или</p>
						<p className = "form-choise-mail">
							на почту <a href = "mailto:mail@bluebeans.ru" rel="nofollow" className = "simply-link">mail@bluebeans.ru</a>
						</p>
					</div>
				</main>
			</>
        )
    }