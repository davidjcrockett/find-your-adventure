import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const CardComponent = ({ games }) => {
	return (
		<>
		{games.map((game) => {
			const { id, background_image, name, released } = game;
			return (
				<Card
				key={id}
				className='card mb-3'
				border='dark'
				style={{ width: '16rem', height: '19rem' }}
				>
					<Card.Img 
						variant='bottom'
						src={background_image}
						style={{width: '16rem'}}
					/>
					<Card.Body>
						<div>
							<Link to={`/games/details/${id}`}>
							<Card.Title>
								<h4 className='card-title'>{name}</h4>
							</Card.Title>
							<Card.Footer>
							<small className='text-muted'> Released: {released}</small>
							</Card.Footer>
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