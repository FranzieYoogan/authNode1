import { useEffect, useState } from "react";

function Home() {

  const [name, setName] = useState<string | null>(null);
  
  
  useEffect(() => {

    const storedName = localStorage.getItem('name');
    if (storedName) {

        setName(storedName);
        console.log(storedName);

    } else {

        console.log('No name found in local storage');
        window.location.href = '/login';

    }

  },[])

    return(

        <>
        
        <h1>{name}</h1>
        
        </>

    )

}

export default Home;