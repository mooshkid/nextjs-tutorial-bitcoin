import { useRouter } from "next/router";


const Profile = () => {

  const router = useRouter();
  const {username} = router.query

  return <div> hello {username} !</div>
}

export default Profile;