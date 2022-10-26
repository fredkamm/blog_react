import { useEffect } from 'react';

import Timeline from '../components/timeline';
import Header from '../components/header';
import SideBar from '../components/sidebar';

export default function Dashboard() {
  useEffect(() => {
    document.title = 'Instagram';
  }, []);

  return (
    <div className="bg-gray-background">
      <Header />
      <div className="grid">
        <Timeline />
        <SideBar />
      </div>
    </div>
  );
}
