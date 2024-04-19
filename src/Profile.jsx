import {React ,useState ,useEffect} from 'react'
import axios from 'axios'

const Profile = () => {

    const [profileName ,setProfileName] = useState("");
    const [profileCell ,setProfileCell] = useState("");
    const [profileImage ,setProfileImage] = useState("");
    const [profileEmail ,setProfileEmail] = useState("");

    const ProfileData = async ()=>{
        try {
            const res = await axios.get("https://randomuser.me/api/")
            
            setProfileCell(res.data.results[0].cell)
            setProfileEmail(res.data.results[0].email)
            setProfileImage(res.data.results[0].picture.large)
            setProfileName(`${res.data.results[0].name.first} ${res.data.results[0].name.last} `)
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
            <img src={profileImage} style={{width:"100%"}} />
            <h1>{profileName}</h1>
            <p id="title" >{profileEmail}</p>
            <p>{profileCell}</p>
            <p>
                <button>Contact</button>
            </p>
            
        </div>    
    </>

  )
}

export default Profile