import { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

const CreatePost=()=>{

    const [title,setTitle]=useState('');
    const[summary,setSummary]=useState('');
    const[content,setContent]=useState('');
    return (
     <form>
       <input type="title" placeholder="title" /> 
       <input type="summary" placeholder="summary" />
       <input type="file" />
       <ReactQuill/>
       <button style={{marginTop:'5px'}}>create post </button>
    </form>
    );
}

export default CreatePost;