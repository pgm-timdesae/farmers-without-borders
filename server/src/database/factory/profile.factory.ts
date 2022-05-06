import { Profile } from '../../profiles/entities/profile.entity';
import { define } from 'typeorm-seeding';

define(Profile, () => {
  const profile = new Profile();

  profile.firstName = null;
  profile.lastName = null;
  profile.profilePicture = null;
  profile.gender = null;
  profile.birthday = null;
  profile.street = null;
  profile.houseNumber = null;
  profile.zipCode = null;
  profile.country = null;
  profile.telephoneNumber = null;

  return profile;
});
