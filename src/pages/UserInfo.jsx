import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserInfo } from "../redux/userInfo/userInfoAction";
import { useParams } from "react-router-dom";
import { 
  Spinner, 
  Avatar, 
  Heading, 
  Text, 
  Card, 
  CardBody, 
  Stat,
  StatLabel,
  StatNumber,
  StatGroup, 
  Link,

} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import './UserInfo.css';


const UserInfo = () => {
  const { userName } = useParams();
  const dispatch = useDispatch();
  const { loading, userInfo, error } = useSelector((state) => state.userInfo);

  useEffect(() => {
    dispatch(fetchUserInfo(userName));
  }, [dispatch]);

  if(loading) return <div className="spinner"><Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' /></div>
  if(error) return <div>{error.message}</div>

  return (
      <div className="user-info-card">
        <Card>
          <CardBody>
            <br />

            <Avatar size='2xl' name={userInfo.name} src={userInfo.avatar_url}  />
            <Heading>{userInfo.name}</Heading>
            <Text>{userInfo.bio}</Text>

            <br />

            <StatGroup>

              <Stat>
                <StatLabel>Followers</StatLabel>
                <StatNumber>{userInfo.followers}</StatNumber>
              </Stat>

              <Stat>
                <StatLabel>Following</StatLabel>
                <StatNumber>{userInfo.following}</StatNumber>
              </Stat>

              <Stat>
                <StatLabel>Public Repos</StatLabel>
                <StatNumber>{userInfo.public_repos}</StatNumber>
              </Stat>

            </StatGroup>

            <br />

            <Link href={userInfo.html_url} isExternal>
              Github User Profile <ExternalLinkIcon mx='2px' />
            </Link>

          </CardBody>
        </Card>
      </div>
  );
}

export default UserInfo;