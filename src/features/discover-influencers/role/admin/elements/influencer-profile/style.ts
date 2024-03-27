import styled from '@emotion/styled';
import { Theme } from '@mui/material';
import { Grid } from 'components/system';

export const InfluencerProfileModalMain = styled(Grid)<{ theme?: Theme }>`
  ${({ theme }) => `
width: 100%;

${theme.breakpoints.down('xl')} {
  grid-template-columns: 1fr 1fr;
}

${theme.breakpoints.down('sm')} {
  display: flex;
  flex-direction: column;
}
`}
`;

export const InfluencerTitle = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    display: flex;
    align-items: center;
    gap: ${theme.spacing(2.5)};
  `}
`;
