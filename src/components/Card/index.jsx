import './card.scss';

function Card ({cover, title}) {
    return (
        
        <article className='card'>
            <img src= {cover} alt="interieur piole" className='card__img' />
            <div className='card__title'>
                <p className='card__title__text'>{title}</p>
            </div>
        </article>
       
    )
}

export default Card