import Post from '../post/Post'
import './posts.scss'

const Posts = () => {

    //TEMPORARY
    const posts = [
        {
            id: 1,
            name: 'John Doe',
            userId: 1,
            profilePic: 'https://images.pexels.com/photos/886285/pexels-photo-886285.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
            desc: 'Etiam porttitor ante eu nulla lobortis dignissim. Sed id orci ante. Sed efficitur erat fringilla magna porttitor, ut mattis diam cursus. Suspendisse blandit lacinia dapibus. Curabitur euismod nec eros ac luctus. Nam vestibulum venenatis lacus, eget rhoncus magna sollicitudin vel. Etiam in enim nec velit suscipit consectetur. Sed ipsum leo, bibendum non dictum in, elementum id ligula. In venenatis leo nec nunc lacinia imperdiet.',
            img: 'https://images.pexels.com/photos/708440/pexels-photo-708440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id: 2,
            name: 'John Doe',
            userId: 1,
            profilePic: 'https://images.pexels.com/photos/886285/pexels-photo-886285.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
            desc: 'Aenean hendrerit et ipsum nec imperdiet. Integer id magna tincidunt, volutpat augue et, rutrum tellus. Integer vulputate tempus condimentum. Curabitur gravida tempor metus, eu accumsan libero. Fusce mollis, eros a porttitor facilisis, enim metus elementum enim, vel volutpat justo tortor in nulla. Sed feugiat lacus quis lorem luctus, ac volutpat sapien luctus.',
            img: 'https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
    ]

    return (
        <div className="posts">
            { posts.map(post => (
                <Post 
                    key={post.id}
                    post={post}
                />
            )) }
        </div>
    )
}

export default Posts