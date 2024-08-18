import Head from 'next/head'

export default function Index (props){

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

                <main className = "wrapper">
                    <section className = "section-top main-page-screen">
                        <div className = "section main-page-screen-section">
                            <div className = "top-1">
                                <h2 className = "main-h1 padding-bottom-2">Любите кофе?</h2>
                                <p className = "main-h2 padding-bottom-2">Добро пожаловать в <a href = "/" className = "main-h-link">bluebeans.ru</a>!</p>
                                <p className = "main-h3 padding-bottom-3">Предлагаем купить кофе в зернах от лучших производителей в нашем магазине.</p>
                                <p className = "main-h4">У нас только лучшие бренды, гибкие условия доставки и индивидуальный подход к каждому клиенту!</p>
                                <a href = "/catalog" aria-label = "Перейти" className = "top-button">
                                    Каталог
                                </a>
                            </div>
                            <div className = "top-2">
                                <img src="/images/kofe.png" alt="Пакет с кофейными зернами" className = "top-pic" />
                            </div>
                        </div>
                        <a href = "#welcome" className = "more-info scroll-to" data-scroll-to = "welcome" aria-label="welcome"></a>
                    </section>
                    <section className = "section section-welcome" id = "welcome">
                        <h2 className = "h2-title">Почему стоит заказать именно у нас?</h2>
                        <div className = "advantages-constructor">
                            <div className = "advantages-constructor-first"></div>
                            <div className = "advantages-constructor-second"></div>
                            <div className = "advantages-constructor-list-w">
                                <ul className = "advantages-constructor-list">
                                    <li className = "advantages-constructor-item">Только оригинальный товар</li>
                                    <li className = "advantages-constructor-item">Только проверенные поставщики</li>
                                    <li className = "advantages-constructor-item">Не устроит качество - вернем деньги</li>
                                    <li className = "advantages-constructor-item">Гибкие условия доставки</li>
                                    <li className = "advantages-constructor-item">Удобные способы оплаты</li>
                                    <li className = "advantages-constructor-item">На связи с 9-00 до 21-00</li>
                                    <li className = "advantages-constructor-item">Бережно относимся к товару</li>
                                    <li className = "advantages-constructor-item">Всегда готовы пойти на встречу</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section className = "section plus-minus">
                        <h2 className = "h2-title">Если вы любитель кофе - наш магазин <a href = "/" className = "simple-link">Bluebeans.ru</a> к вашим услугам!</h2>
                        <ul className="advantages-block">
                            <li className = "advantage-item">
                                Мы работаем для вас и с удовольствием ответим на любой вопрос и учтем все пожелания. 
                                Нашим клиентам мы предоставляем скидки и подарки, проводим акции.
                            </li>
                            <li className = "advantage-item">
                                Мы тщательно анализируем отзывы на всевозможных торговых площадках и тестируем каждый продукт, поэтому хорошо знаем 
                                о каждом товаре в нашем ассортименте и будем рады рассказать о нем вам. Кофе - очень индивидуальный продукт.
                                    У каждого свой вкус, а о вкусах, как известно, не спорят. Но мы постараемся подобрать для вас наиболее подходящий вариант.
                            </li>
                            <li className = "advantage-item">
                                У нас вы не столкнетесь с подделками. Соблазнившись низкой ценой, есть риск столкнуться с контрафактной продукцией. 
                                Особенно это актуально в сегодняшнее время санкций и паралелльного импорта. 
                                В результате - потраченные деньги и разочарование в покупке. Это все не про нас.
                                    Мы предлагаем товар только от надежных поставщиков и уверены в качестве.
                            </li>
                            <li className = "advantage-item">
                                Перед тем как попасть на наш стол, кофейное зерно проходит очень долгий и сложный
                                    путь от плантации до прилавка. Из-за этого продукция даже самого 
                                    надежного производителя иногда может отличаться от привычной. 
                                    Распространенные проблемы - подгоревшие или недожаренные, сырые
                                    или пересушенные зерна, внезапное изменение привычного состава смеси,
                                    нарушение оболочки при транспортировке. Все это может испортить впечатление 
                                    от напитка.<br /><br />Но наши покупатели надежно застрахованы от таких проблем - ведь 
                                    мы берем эти риски на себя. Если вас смутит какой-то из наших товаров - пишите и присылайте фото. 
                                    Мы без проблем вернем деньги или обменяем его на другой. Наша поддержка по всем вопросам всегда к вашим услугам.
                            </li>
                            <li className = "advantage-item">
                                Рассмотрим все пожелания и предложения. Учтем все нарекания. Проанализируем все ваши отзывы чтобы стать лучше.
                            </li>
                                <li className = "advantage-item">
                                Надежно храним персональные данные и никогда не злоупотребляем доверием. Никаких нежелательных спам-рассылок, смс и звонков. 
                                Никаких утекших в сеть баз заказов с адресами.
                            </li>
                            <li className = "advantage-item">
                                Все заказы надежно упакованы и не потеряют вид при доставке. Если какой-то товар в дальнейшем будет использован как подарок,
                                    то мы уделим упаковке еще больше внимания.
                            </li>
                            <li className = "advantage-item">
                                Мы продаем только зарекомендовавшие себя сорта и виды, проверенные и одобренные кофеманами. 
                                У нас пока небольшой ассортимент, но со временем он конечно же будет расширяться. 
                                Мы будем искать и тестировать интересные новинки и радовать вас
                                    новыми позициями в <a href = "/catalog" className = "simply-link">нашем каталоге</a>.
                            </li>
                        </ul>
                    </section>
                </main>
            </>
        )
    }