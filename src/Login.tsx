import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './assets/css/login.css';
import axios from 'axios';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = (e: React.FormEvent) => {

      e.preventDefault();
      const user = {

        email: email,
        password: password

      }

      axios.post('http://localhost:3000/login', user)
      .then(response => {

        console.log(response.data);
        if(response.data.user) {

          setSuccess('Credentials are valid');
          setEmail('');
          setPassword('');
          setError('');
          localStorage.setItem('name', response.data.user.name);
           

        } else {

          setError('Login failed');
          setSuccess('');
          setTimeout(() => {
           setError('');
           setEmail('');
           setPassword('');
          }, 3000);

        }

      })

      .catch(error => {

        console.log(error);
        setError('Login failed');
        setSuccess('');

        setTimeout(() => {

          setError('');
          setEmail('');
          setPassword('');

        }, 3000);

      })

    }

    return(

        <>
            
<form onSubmit={handleSubmit} className="formStyle max-w-sm mx-auto">
  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>

  <button type="submit" className="buttonLogin text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

      {error != '' &&

  <section className='containerAlert'>

 
<div className="alertStyle p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
<span className="font-medium">Error!!</span> {error}
</div>
</section>  
      }

      {success != '' &&

<section className='containerAlert'>

<div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
<span className="font-medium">Success!!</span> {success}
</div>

</section>  
      }


        </>


    )

}

export default Login;