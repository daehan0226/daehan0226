
import { SocialIconBoxProps } from '../../../models';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

const SocialIconBox = ({children, link}:SocialIconBoxProps) => {
    return (
      <Link href={link}>
        <Box sx={{
          width: 55,
          height: 55,
          backgroundColor: 'grey.300',
          cursor: "pointer",
          '&:hover': {
            backgroundColor: "secondary.dark",
            boxShadow: "0 0 0 3px rgb(4 94 201 / 10%)",
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