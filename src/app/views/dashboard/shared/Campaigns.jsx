import { Box } from '@mui/material';
import { MatxProgressBar, SimpleCard } from 'app/components';
import { Small } from 'app/components/Typography';

const Campaigns = () => {
  return (
    <Box>
      <SimpleCard title="Insights">
        <div style={{ marginBottom:"10px"}}><Small color="text.secondary" >Comparing to last month:</Small></div>
        <Small color="text.secondary">Earnings</Small>
        <MatxProgressBar value={74} color="primary" text="+5%" />
        <Small color="text.secondary">Spendings</Small>
        <MatxProgressBar value={75} color="secondary" text="+15%" />
        <Small color="text.secondary">DYM Interest</Small>
        <MatxProgressBar value={55} color="primary" text="+8%" />

        {/* <Small color="text.secondary" display="block" pt={4}>
          Yesterday
        </Small>
        <MatxProgressBar value={75} color="primary" text="Google (102k)" />
        <MatxProgressBar value={45} color="secondary" text="Twitter (40k)" />
        <MatxProgressBar value={75} color="primary" text="Tensor (80k)" />

        <Small color="text.secondary" display="block" pt={4}>
          Yesterday
        </Small>
        <MatxProgressBar value={75} color="primary" text="Google (102k)" />
        <MatxProgressBar value={45} color="secondary" text="Twitter (40k)" />
        <MatxProgressBar value={75} color="primary" text="Tensor (80k)" /> */}
      </SimpleCard>
    </Box>
  );
};

export default Campaigns;
