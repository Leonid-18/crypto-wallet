import {
  Avatar,
  Box,
  Card,
  Icon,
  IconButton,
  MenuItem,
  Select,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  useTheme,
} from '@mui/material';
import { Paragraph } from 'app/components/Typography';

const CardHeader = styled(Box)(() => ({
  display: 'flex',
  paddingLeft: '24px',
  paddingRight: '24px',
  marginBottom: '12px',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const Title = styled('span')(() => ({
  fontSize: '1rem',
  fontWeight: '500',
  textTransform: 'capitalize',
}));

const ProductTable = styled(Table)(() => ({
  minWidth: 400,
  whiteSpace: 'pre',
  '& small': {
    width: 50,
    height: 15,
    borderRadius: 500,
    boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
  },
  '& td': { borderBottom: 'none' },
  '& td:first-of-type': { paddingLeft: '16px !important' },
}));

const Small = styled('small')(({ bgcolor }) => ({
  width: 50,
  height: 15,
  color: '#fff',
  padding: '2px 8px',
  borderRadius: '4px',
  overflow: 'hidden',
  background: bgcolor,
  boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
}));

const TopSellingTable = () => {
  const { palette } = useTheme();
  const bgError = palette.error.main;
  const bgPrimary = palette.primary.main;
  const bgSecondary = palette.secondary.main;

  return (
    <Card elevation={3} sx={{ pt: '20px', mb: 3 }}>
      <CardHeader>
        <Title>Last Trasactions</Title>
        <Select size="small" defaultValue="this_month">
          <MenuItem value="this_month">Crypto</MenuItem>
          <MenuItem value="last_month">Fiat</MenuItem>
        </Select>
      </CardHeader>

      <Box overflow="auto">
        <ProductTable>
          <TableHead>
            <TableRow>
              <TableCell sx={{ px: 3 }} colSpan={4}>
                Merchant's Name
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={2}>
                Amount
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={2}>
                Total Balance
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {productList.map((product, index) => (
              <TableRow key={index} hover>
                <TableCell colSpan={4} align="left" sx={{ px: 0, textTransform: 'capitalize' }}>
                  <Box display="flex" alignItems="center">
                    {/* <Avatar src={product.imgUrl} /> */}
                    {/* "arrow_back",
  "arrow_downward",
  "arrow_drop_down",
  "arrow_drop_down_circle",
  "arrow_drop_up",
  "arrow_forward",
  "arrow_upward", */}
                     {product.price > 0 ?
                    <Icon className="icon" color="success">arrow_forward</Icon> : <Icon className="icon" color="error">arrow_back</Icon>}
                    <Paragraph sx={{ m: 0, ml: 4 }}>{product.name}</Paragraph>
                  </Box>
                </TableCell>

                <TableCell align="left" colSpan={2} sx={{ px: 0, textTransform: 'capitalize' }}>
                  {product.price > 0 ? `$${product.price}` : `-$${product.price.toString().replace('-', "")}`}
                </TableCell>

                <TableCell sx={{ px: 0 }} align="left" colSpan={2}>
                  {/* {product.available ? (
                    product.available < 20 ? (
                      <Small bgcolor={bgSecondary}>{product.available} available</Small>
                    ) : (
                      <Small bgcolor={bgPrimary}>in stock</Small>
                    )
                  ) : (
                    <Small bgcolor={bgError}>out of stock</Small>
                  )} */}
                  {product.available}$
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </ProductTable>
      </Box>
    </Card>
  );
};

const productList = [
  {
    imgUrl: '/assets/images/products/headphone-2.jpg',
    name: 'DYM interest',
    price: 100,
    available: 3600,
  },
  {
    imgUrl: '/assets/images/products/headphone-3.jpg',
    name: 'Buy ETH',
    price: -1500,
    available: 3500,
  },
  {
    imgUrl: '/assets/images/products/iphone-2.jpg',
    name: 'Salary',
    price: 1900,
    available: 5000,
  },
  {
    imgUrl: '/assets/images/products/iphone-1.jpg',
    name: 'DYM interest',
    price: 100,
    available: 3100,
  },
  {
    imgUrl: '/assets/images/products/headphone-3.jpg',
    name: 'Buy BTC',
    price: -1190,
    available: 3000,
  },
  {
    imgUrl: '/assets/images/products/headphone-3.jpg',
    name: 'Utilities',
    price: -200,
    available: 4190,
  },
  {
    imgUrl: '/assets/images/products/headphone-3.jpg',
    name: 'Rent',
    price: -500,
    available: 4390,
  },
];

export default TopSellingTable;
