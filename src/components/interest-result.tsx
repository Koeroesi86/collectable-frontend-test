import { FC } from "react";
import { InterestProfile } from "../configuration/interest-profile";
import { Box } from "./styled/box";
import { Typography } from "./styled/typography";


interface InterestResultProps {
  profile: InterestProfile;
}

const InterestResult: FC<InterestResultProps> = ({ profile }) => (
  <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
    <Typography color="charcoal">
      Liked: {profile.likes.length ? profile.likes.join(', ') : 'None'}
    </Typography>
    <Typography color="charcoal">
      Disliked: {profile.dislikes.length ? profile.dislikes.join(', ') : 'None'}
    </Typography>
    <Typography color="charcoal">
      Remained neutral: {profile.neutral.length ? profile.neutral.join(', ') : 'None'}
    </Typography>
  </Box>
);

export { InterestResult };
