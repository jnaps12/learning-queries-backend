import { TableColumn } from 'typeorm/browser';

export const createdAtcolumn = {
  name: 'created_at',
  type: 'timestamp',
  default: 'now()',
} as TableColumn;
