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

const PaymentKR = () => (
  <div className="payment-whole">
    <div className="whole">
      <Box sx={{ width: '70%' }} className="boxy">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Item>엑심페이</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>카카오페이</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>네이버페이</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>삼성페이</Item>
          </Grid>
        </Grid>
      </Box>
    </div>
    <div className="whole card">
      <Box sx={{ width: '70%' }} className="boxy">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} className="grid">
            <Item>국민카드</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>신한카드</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>현대카드</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>롯데카드</Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  </div>
);

export default PaymentKR;
