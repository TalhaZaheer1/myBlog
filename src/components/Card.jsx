import {useState,useEffect} from 'react'
import databaseService from "../appwrite/database";
import {Link} from 'react-router-dom'

export default function Card({$id,title,featuredImage}){
    const [src,setSrc] = useState('');
    useEffect(() => {
    databaseService.getFilePreview(featuredImage)
    .then(data => setSrc(data))
    },[])

    return(
        <Link to={`/post/${$id}`}>
        <div className='m-auto mt-5 card cursor-pointer border-neo-red border-4 bg-white w-96 h-80 rounded-lg transition-all'>
            <div className=' mb-5'>
                <img className='w-96 object-cover h-56 m-auto' src={src} alt="card image" />
            </div>
            <h1 className='font-semibold text-2xl text-center '>{title}</h1>
        </div>
        </Link>
    )
} 