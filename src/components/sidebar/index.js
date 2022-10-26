import useUser from '../../hooks/use-user';
import User from './user';
import Suggestions from './suggestions';

export default function SideBar() {
  const {
    user: { fullName, username, userId }
  } = useUser();
  console.log(fullName, username, userId);
  return (
    <div className="p-4">
      <User username={username} fullName={fullName} />
      <Suggestions userId={userId} />
    </div>
  );
}
