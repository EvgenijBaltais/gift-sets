const Footer = () => {
    
    return (
			<footer className="footer">
				<div className="footer-w">
					<div className="footer-block footer-block-contacts">
						<div className="footer-social-write">
							<span className = "footer-social-write-span">Тел.:</span>&nbsp;
							<a className="footer-phone" href="tel:+79104196910" title="Позвонить нам">+7 (910) 419-69-10</a>
						</div>
						<div className="footer-social-write">
							<span className = "footer-social-write-span">Email:</span>&nbsp;
							<a className="footer-email" href="mailto:mail@bluebeans.ru" title="Написать нам на email" rel="nofollow">mail@bluebeans.ru</a>
						</div>
						<p className="footer-text">По любым вопросам:</p>
						<div className="footer-social-write footer-social-write-soc">
							<span className="footer-contact-link footer-contact-link-telegramm" title="Написать нам в Telegram"></span>
							<span className="footer-contact-link footer-contact-link-whatsapp" title="Написать нам в Whatsapp"></span>
							<span className="footer-contact-link footer-contact-link-chat" title="Оставить заявку в чате"></span>
						</div>
					</div>
					<div className="footer-block">
						<p className="footer-text-sm">Доставка<br />по г. Москва и г. Красногорск:</p>
						<p className="footer-text-th">c 9:00 до 22:00</p>
					</div>
					<div className="footer-block footer-block-menu">
						<ul className="footer-nav">
							<li className="footer-nav__item">
								<a className="footer-nav__link<? if ($_SERVER['REQUEST_URI'] == '/'):?><?=' active'?><?endif?>" href= "/">Главная</a>
							</li>
							<li className="footer-nav__item">
								<a className="footer-nav__link<? if ($_SERVER['REQUEST_URI'] == '/catalog'):?><?=' active'?><?endif?>" href="/catalog">Каталог</a>
							</li>
							<li className="footer-nav__item">
								<a className="footer-nav__link<? if ($_SERVER['REQUEST_URI'] == '/about'):?><?=' active'?><?endif?>" href="/about">О нас</a>
							</li>
							<li className="footer-nav__item">
								<a className="footer-nav__link<? if ($_SERVER['REQUEST_URI'] == '/delivery'):?><?=' active'?><?endif?>" href="/delivery">Доставка</a>
							</li>
							<li className="footer-nav__item">
								<a className="footer-nav__link<? if ($_SERVER['REQUEST_URI'] == '/return'):?><?=' active'?><?endif?>" href="/return">Возврат</a>
							</li>
							<li className="footer-nav__item">
								<a className="footer-nav__link<? if ($_SERVER['REQUEST_URI'] == '/sale'):?><?=' active'?><?endif?>" href="/return">Акции</a>
							</li>
							<li className="footer-nav__item">
								<a className="footer-nav__link<? if ($_SERVER['REQUEST_URI'] == '/contacts'):?><?=' active'?><?endif?>" href="/contacts">Контакты</a>
							</li>
						</ul>
					</div>
					<div className="footer-block footer-block-logo">
						<a className="footer-logo-link" href="/">
							<img alt="Логотип магазина bluebeans.ru" src="/images/logo-footer.webp" className="footer-logo-pic" />
						</a>
					</div>
					<p className="oferta">* Вся представленная на сайте информация, касающаяся стоимости товаров, наличия на складе, внешнего вида носит информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями Статьи 437(2) Гражданского кодекса РФ.</p>
				</div>
			</footer>
    )
}

export default Footer