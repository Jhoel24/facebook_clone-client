import useAuth from '../../hooks/useAuth'
import './stories.scss'

const Stories = () => {

    //TEMPORARY DATA
    const stories = [
        {
            id: 1,
            name: 'Luis Quintero',
            img: 'https://images.pexels.com/photos/1793306/pexels-photo-1793306.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
        },        
        {
            id: 2,
            name: 'Lil Artisy',
            img: 'https://images.pexels.com/photos/1793059/pexels-photo-1793059.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
        },        
        {
            id: 3,
            name: 'Spencer Selover',
            img: 'https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
        },        
        {
            id: 4,
            name: 'Jodisable Jacob',
            img: 'https://images.pexels.com/photos/975004/pexels-photo-975004.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
        },        
    ]

    const { currentUser } = useAuth()

    return (
        <div className="stories">
                <div className="story" >
                    <img src='/pamela.jpeg' alt={currentUser.name} />
                    <span>{currentUser.name}</span>
                    <button>+</button>
                </div>
            { stories.map(story => (
                <div className="story" key={story.id} >
                    <img src={story.img} alt={story.name} />
                    <span>{story.name}</span>
                </div>
            )) }
        </div>
    )
}

export default Stories