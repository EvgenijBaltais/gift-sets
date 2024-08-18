
import Image from 'next/image'
import Logo from '/public/logo.png'
import Link from 'next/link'

const Header = () => {
    
    return (
			<header className = "header">
				<div className = "top-contacts">
					<div className="top-contacts-ins">
						<span className = "top-delivery-info">Доставка по г. Москва и г. Красногорск</span>
						<div className = "top-contact-links">
							<span className = "top-contact-text">По любым вопросам →</span>
							<span className="top-contact-link top-contact-link-telegramm" title = "Написать нам в Telegram"></span>
							<span className="top-contact-link top-contact-link-whatsapp" title = "Написать нам в Whatsapp"></span>
							<span className="top-contact-link top-contact-link-chat" title = "Оставить заявку в чате"></span>
						</div>
						<a href="tel:+79104196910" className = "top-phone">+7 (910) 419-69-10</a>
					</div>
				</div>
				<nav className = "nav">
					<div className = "full-content-width" itemScope itemType="http://schema.org/SiteNavigationElement">
						<a href = "/" className = "logo-main-link">
							<img src="/images/logo-white.png" title = "" alt="Coffee planet" className = "logo-main" />
						</a>
						<ul className = "nav-list" itemScope itemType="http://schema.org/ItemList">
							<li className = "nav-list-item" itemProp="itemListElement" itemScope="" itemType="http://schema.org/ItemList">
								<a href="/" className = "nav-list-link" itemProp="url">Главная<meta itemProp="name" content="Главная" /></a></li>
							<li className = "nav-list-item" itemProp="itemListElement" itemScope="" itemType="http://schema.org/ItemList">
								<a href="/catalog" className = "nav-list-link" itemProp="url">Каталог<meta itemProp="name" content="Каталог" /></a>
							</li>
							<li className = "nav-list-item" itemProp="itemListElement" itemScope="" itemType="http://schema.org/ItemList">
								<a href="/about" className = "nav-list-link" itemProp="url">О нас<meta itemProp="name" content="О нас" /></a>
							</li>
							<li className = "nav-list-item" itemProp="itemListElement" itemScope="" itemType="http://schema.org/ItemList">
								<a href="/delivery" className = "nav-list-link" itemProp="url">Доставка<meta itemProp="name" content="О нас" /></a>
							</li>
							<li className = "nav-list-item" itemProp="itemListElement" itemScope="" itemType="http://schema.org/ItemList">
								<a href="/return" className = "nav-list-link" itemProp="url">Возврат<meta itemProp="name" content="Возврат" /></a>
							</li>
							<li className = "nav-list-item" itemProp="itemListElement" itemScope="" itemType="http://schema.org/ItemList">
								<a href="/sale" className = "nav-list-link" itemProp="url">Акции<meta itemProp="name" content="Акции" /></a>
							</li>
							<li className = "nav-list-item" itemProp="itemListElement" itemScope="" itemType="http://schema.org/ItemList">
								<a href="/contacts" className = "nav-list-link" itemProp="url">Контакты<meta itemProp="name" content="Контакты" /></a>
							</li>
						</ul>
						<a href="/cart" rel="nofollow" aria-label="Перейти в корзину" className = "cart-block">
							<span className = "cart-num">0 </span>
							<span className = "cart-price-text">товаров</span>
							<span>/</span>
							<span className = "cart-price-value">0</span>
							<span> ₽</span>
						</a>
						<div className = "menu-area">
							<div className="menu-area-w"></div>
							<div className="menu-icon">
								<span></span>
								<span></span>
								<span></span>
								<span></span>
							</div>
						</div>
						<div className = "cart-warnings"></div>
					</div>
				</nav>
			</header>
    )
}

export default Header