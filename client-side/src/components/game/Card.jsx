import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const CardComponent = ({ games }) => {

	const styles = {
		card: {
		  borderRadius: 10,
		  padding: '1rem 1rem 1rem 0rem'
		},
		cardImage: {
		  objectFit: 'cover',
		  margin: 'auto',
		  height: '20vh'
		}
	  }

	return (
		<>
		{games.map((game) => {
			const { id, background_image, name, released } = game;
			return (
				<Card
				key={id}
				className='card mb-3 text-center'
				border='dark'
				style={styles.card}
				>
					<Card.Img src={background_image} style={styles.cardImage}/>
					<Card.Body>
						<div>
							<Link to={`/games/details/${id}`}>
							<Card.Title>
								<h4 className='card-title'>{name}</h4>
							</Card.Title>
							<Card.Subtitle className='mb-2 text-muted'> Released: {released}
							</Card.Subtitle>
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