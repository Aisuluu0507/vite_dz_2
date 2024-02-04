import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const navigate = useNavigate()

  const post = async (event) => {
    event.preventDefault()

    const get = new FormData(event.target)
    const post = {
      title: get.get('title'),
      body: get.get('body'),
    }

    const response = await fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post),
    })

    const data = await response.json()
    navigate('/')
  }
  return (
    <div className='main'>
      <h1 className='create'>Create Post</h1>
      <form onSubmit={post}>
        <label  className='name'htmlFor="title">Name:</label>
        <input className='input' type="text" id="title" name="title" required />
        <br />
        <label className='age' htmlFor="body">Age:</label>
        <textarea className='text'id="body" name="body" required></textarea>
        <br />
        <button className='send' type="submit">Send Data</button>
      </form>
    </div>
  )
}

export default CreatePost