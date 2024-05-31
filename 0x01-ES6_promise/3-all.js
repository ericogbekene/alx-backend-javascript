import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()]).then((results) => {
    // Destructure the results array to get the photo and user
    const [photo, user] = results;
    console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
  }).catch(() => {
    // Handle any errors by logging the specified message
    console.error('Signup system offline');
  });
}
