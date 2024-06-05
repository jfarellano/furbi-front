import { styled } from "@mui/system"

const FullContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '100vh',
  backgroundColor: theme.palette.primary.main
}));

const Box = styled('div') (({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '400px',
  minHeight: '500px',
  height: 'auto',
  backgroundColor: theme.palette.background.paper,
  borderRadius: 20
}));

export const CentralBox = ({children}:{children: React.ReactNode}) => {
  return <FullContainer>
    <Box>
      {children}
    </Box>
  </FullContainer>
}