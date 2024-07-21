import {React ,useState ,useEffect} from 'react'
import axios from 'axios'

const Profile = () => {

    const [profileName ,setProfileName] = useState("");
    const [profileCell ,setProfileCell] = useState("");
    const [profileImage ,setProfileImage] = useState("");
    const [profileEmail ,setProfileEmail] = useState("");
    const [profileCity , setProfileCity] = useState('');

    const ProfileData = async ()=>{
        try {
            const res = await axios.get("https://randomuser.me/api/")
            console.log(res.data)
            setProfileCell(res.data.results[0].cell)
            setProfileEmail(res.data.results[0].email)
            setProfileImage(res.data.results[0].picture.large)
            setProfileName(`${res.data.results[0].name.first} ${res.data.results[0].name.last} `)
            setProfileCity(res.data.results[0].location.city)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect( ()=>{
        ProfileData()
    } , [] )


  return (
    <>
        <div className='card1'>
            <button onClick={ProfileData} >New person</button>
            <img src={profileImage} style={{width:"400px", height:"300px"}} />
            <h1>{profileName}</h1>
            <h2>from: <span>{profileCity}</span> City</h2>
            <p id="title" >{profileEmail}</p>
            <p>phone number is: <span>{profileCell}</span></p>
            <p>
                <button>Contact</button>
            </p>
            
        </div>    
    </>

  )
}

export default Profile