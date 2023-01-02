import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const CardComponent = ({ games }) => {
	return (
		<>
		{games.map((game) => {
			const { id, background_image, name, released } = game;
			return (
				<Card key={id} className='card'>
					<Card.Img 
						variant='top'
						src={background_image}
					/>
					<Card.Body>
						<div>
							<Link to={`/games/details/${id}`}>
							<Card.Title>
								<h4>{name}</h4>
								<p>{released}</p>
							</Card.Title>
							</Link>
						</div>
					</Card.Body>
				</Card>
			)
		})}
		</>
	)
}

export default CardComponent;