import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableCellActions from 'components/Shared/Pagination/TableCellActions';
import IOrder from 'interfaces/models/order';
import React, { memo } from 'react';

interface IProps {
  order: IOrder;
}

const ListItem = memo((props: IProps) => {
  const { order } = props;
  return (
    <TableRow>
      <TableCell>{order.email}</TableCell>
      <TableCell>{order.description}</TableCell>
      <TableCell>{order.quantity}</TableCell>
      <TableCell>{order.price}</TableCell>
      <TableCellActions />
    </TableRow>
  );
});

export default ListItem;
