import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Avatar, Spinner, Text, Divider } from '@chakra-ui/react';
import './GithubUsers.css';

const GithubUsers = () => {
  const { loading, users, error } = useSelector((state) => state.users);

  if(loading) return <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
  if(error) return <div>{error.message}</div>

   return (
      <div className="github-user">
        {users.map((user) => {
          return  (
            <div className="github-user-card">
              <Link key={user.id} to={`/user-info/${user.login}`} >
               <div className="github-user-body">
                  <Avatar src={user.avatar_url} />
                  <Text fontWeight='bold'>{user.login}</Text>
               </div>
              </Link>
              <div className="github-user-divider">
                <Divider orientation='horizontal' />
              </div>
            </div>
          ); 
        })}
      </div> 
  );

}

export default GithubUsers