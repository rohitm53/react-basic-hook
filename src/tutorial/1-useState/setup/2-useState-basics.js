import React,{useState} from 'react';

const UseStateBasics = () => {
  // console.log(useState('hello world'));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value,handler)

  const [text,setText]=useState('Random Title');
  const handleClick = ()=> {
    if(text=='Random Title'){
      setText('Hello World');
    }else{
      setText('Random Title');
    }
  }

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type='button' className='btn' onClick={handleClick}>Change Tilte</button>
    </React.Fragment>
  );
};

export default UseStateBasics;
