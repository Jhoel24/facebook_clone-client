import './comments.scss'
import useAuth from '../../hooks/useAuth'

const Comments = () => {

    const { currentUser } = useAuth
      //TEMPORARY
      const comments = [
        {
            id: 1,
            desc: 'Etiam porttitor ante eu nulla lobortis dignissim.',
            name: 'Raúl Reynoso',
            userId: 1,
            profilePicture: 'https://images.pexels.com/photos/1018911/pexels-photo-1018911.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        },
        {
            id: 2,
            desc: 'Aenean hendrerit et ipsum nec imperdiet. Integer id magna tincidunt, volutpat augue et, rutrum tellus.',
            name: 'Godisable Jacob',
            userId: 2,
            profilePicture: 'https://images.pexels.com/photos/965324/pexels-photo-965324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        },
    ]

    return (
        <div className="comments">
            <div className="write">
                <img src="/pamela.jpeg" alt="" />
                <input type="text" placeholder='Write a comment' />
                <button>Send</button>
            </div>
            { comments.map(comment => (
                <div className="comment" key={ comment.id } >
                    <img src={comment.profilePicture} alt="" />
                    <div className="info">
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <span className='date'>1 hour ago</span>
                </div>
            )) }
        </div>
    )
}

export default Comments