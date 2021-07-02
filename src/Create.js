import { useState } from "react";
import { useHistory } from "react-router";
import TextareaAutosize from 'react-textarea-autosize';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState('');
  const [time, setTime] = useState('');
  const [author, setAuthor] = useState('hasan');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const recipe = {title, body, author, image, time};

    setIsPending(true);

    fetch('https://quick-recipes.herokuapp.com/recipes', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(recipe)
    }).then(()=>{
      console.log("new recipe added");
      setIsPending(false);
      history.push('/');
    })
  }

  return (
    <div className="create h-screen">
      <h2 className="text-gray-700 lg:text-6xl text-5xl font-semibold pt-12 pb-12 border-b border-gray-200 flex justify-center">Add a New Recipe</h2>
      <div className="sm:max-w-2xl lg:max-w-4xl mx-auto flex-none justify-center">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-red-500" onSubmit={handleSubmit}>
          <label className="text-label">Recipe title</label>
          <input
            className="text-input"
            type="text"
            required
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
          />
          <label className="text-label">Recipe instructions:</label>
          <TextareaAutosize
             className="text-input"
             required
             value={body}
             onChange={(e)=>setBody(e.target.value)}
          />
          <label className="text-label">Recipe image (link):</label>
          <input
            className="text-input"
            value={image}
            onChange={(e)=>setImage(e.target.value)}
          ></input>
          <label className="text-label">Time:</label>
          <input
            className="text-input"
            value={time}
            onChange={(e)=>setTime(e.target.value)}
          ></input>
          <label className="text-label">Recipe author:</label>
          <input
            className="text-input"
            value={author}
            onChange={(e)=>setAuthor(e.target.value)}
          >
          </input>
          {!isPending && 
            <div className="flex justify-center">
              <button className="btn mt-8">Add Recipe</button>
            </div> 
          }
          {isPending && <button disabled>Adding Recipe....</button>}
        </form>
      </div>
    </div>
  );
}
 
export default Create;