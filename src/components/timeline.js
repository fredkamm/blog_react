/* eslint-disable no-nested-ternary */
import Skeleton from 'react-loading-skeleton';
import usePhotos from '../hooks/use-photos';

export default function Timeline() {
  const { photos } = usePhotos();

  console.log('photos', photos);
  return (
    <div className="container col-span-2">
      {!photos ? (
        <>
          {[...new Array(4)].map((_, index) => (
            <Skeleton count={2} width={640} height={500} className="mb-5" />
          ))}
        </>
      ) : photos && photos.length > 0 ? (
        photos.map((content) => <p key={content.docId}>{content.imageSrc}</p>)
      ) : (
        <p className="text-center text-2xl">Follow people to see photos</p>
      )}
    </div>
  );
}

// what do we need?
// -> we need to get the logged in users photos
// -> loading the pages, use react skeleton
// -> if we have a photo, render them (create a post component)
// -> if the user has no photos, tell them to create some photos
