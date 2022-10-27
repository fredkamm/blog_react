/* eslint-disable object-curly-newline */
import useUser from '../../hooks/use-user';
import User from './user';
import Suggestions from './suggestions';

export default function SideBar() {
  const {
    user: { fullName, username, userId, following }
  } = useUser();

  console.log(fullName, username, userId, following);

  return (
    <div className="p-4">
      <User username={username} fullName={fullName} />
      <Suggestions userId={userId} />
    </div>
  );
}
