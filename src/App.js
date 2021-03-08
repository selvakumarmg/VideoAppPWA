import React from 'react';
import "./App.css" 


const App = () => {

  const [data,setData] = React.useState([]);


  React.useEffect(async()=>{
    const result = await fetch("https://orangevalleycaa.org/api/videos").then(response=> response.json())
    setData(result)
    // alert(JSON.stringify(result))
  },[])

  return (
    <div>
      <header>
        Videos
      </header>
      {
        data.map(video=>(
          <div>
            <p>{video.name}</p>
            <video height={200} width={'100%'} src={video.video_url} controls />
          </div>
        ))
      }
    </div>
  );
}
 
App.propTypes = {};
 
export default App;