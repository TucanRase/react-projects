import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
function Cards() {
	return (
		<div className='cards'>
			<h1>Check out these EPIC destinations!</h1>
			<div className='cards__container'>
				<div className='cards__wrapper'>
					<ul className='cards__items'>
						<CardItem src='images/norge.jpg' text='Explore the hidden waterfall deep inside the Amazon Jungle' label='Adventure' path='/services' />
						<CardItem src='images/nublo.jpg' text='Vaya al lugar de rodaje de la famosa serie de Netflix The Witcher' label='Tourism' path='/services' />
					</ul>
					<ul className='cards__items'>
						<CardItem src='images/awita.jpg' text='Explore the beautiful fjord of norway with us, in the Preikestolen' label='Adventure' path='/services' />
						<CardItem src='images/casa.jpg' text='Come with and take a look at these cozy houses by the sea' label='Tourism' path='/services' />
						<CardItem src='images/piedra.jpg' text="Let's go hiking around norway this places will take your breath away" label='Hiking' path='/services' />
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cards;
