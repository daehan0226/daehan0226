
import { SocialIconBoxProps } from '../../../models';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

const SocialIconBox = ({children, link, color}:SocialIconBoxProps) => {
    return (
      <Link href={link}>
        <Box sx={{
          width: 55,
          height: 55,
          color: `${color}.700`,
          // backgroundColor: `${color}.100` ,
          cursor: "pointer",
          '&:hover': {
            transform: "scale(0.9)",
          },
          display: 'flex',
          alignItems: "center",
          justifyContent: "center",
          transition: "background 0.3s, color 0.3s, box-shadow 0.3s, transform 0.3s"
        }}>
            {children}
          </Box>
        </Link>
    )
  }

  export default SocialIconBox