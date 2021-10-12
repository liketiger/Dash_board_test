import { Box, Paper, Grid } from '@material-ui/core';
import { styled } from '@material-ui/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 100,
  fontSize: 50,
}));

const PaymentGL = () => (
  <div className="payment-whole">
    <div className="whole">
      <Box sx={{ width: '70%' }} className="boxy">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Item>Paypal</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>Alipay</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>Line pay</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>Google pay</Item>
          </Grid>
        </Grid>
      </Box>
    </div>
    <div className="whole">
      <Box sx={{ width: '70%' }} className="boxy">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} className="grid">
            <Item>Visa</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>Master</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>Suncorp</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>American</Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  </div>
);

export default PaymentGL;
