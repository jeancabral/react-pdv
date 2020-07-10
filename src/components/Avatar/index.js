import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import * as s from './styled';

const Avatar = () => <s.AvatarWrapper fixed={avatarImage.childImageSharp.fixed} alt="Avatar" />;

export default Avatar;
