import { TableColumn } from 'typeorm';

export const createdAtcolumn = {
  name: 'created_at',
  type: 'timestamp',
  default: 'now()',
} as TableColumn;
