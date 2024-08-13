import React, { useEffect } from "react"
import Head from 'next/head'
import Reviews from "../components/Reviews"

export default function Index (props){

    useEffect(() => {

        document.querySelector('.wrapper').classList.add('main-page')
        document.querySelector('.header').classList.remove('fullsize-nav')

        return () => {
            document.querySelector('.wrapper').classList.remove('main-page')
        }
    }, [])

        return (
            <>
                <Head>
                    <title>Отдых по России и Подмосковью</title>
                    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                </Head>

                <div className="main-title"></div>

                <Reviews />
            </>
        )
    }

export async function getStaticProps(context) {
    
    // Популярные отели
/*
	const getHotels = await fetch('https://maot-api.bokn.ru/api/hotels/top')
	const popularHotels = await getHotels.json()

    // Популярные направления

	const getWays = await fetch('https://maot-api.bokn.ru/api/regions/top')
	const popularWays = await getWays.json()
  */
    // Отзывы

	//const getReviews = await fetch('https://maot-api.bokn.ru/api/load?id=6713')
	//let reviews = await getReviews.json()
    //    reviews = reviews.data.reviews

    /*return {
        props: {
            popularHotels,
            popularWays,
            //reviews
        },
    }*/
}
