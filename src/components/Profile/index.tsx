import React from 'react';

import profile from './content';

import * as s from './styled';

const Profile: React.FC = () => (
  <s.ProfileWrapper>
    <img src="https://api.adorable.io/avatars/125/abott@adorable.png" alt="" />
    <s.ProfileList>
      <s.ProfileItem>
        <s.ProfileLink to="/">
          {profile.alias}
        </s.ProfileLink>
      </s.ProfileItem>
      <s.ProfileItem>
        {profile.role}
      </s.ProfileItem>
    </s.ProfileList>
  </s.ProfileWrapper>
);

export default Profile;
