import { TableColumn } from 'typeorm/browser';

export const updatedAtColumn = {
  name: 'updated_at',
  type: 'timestamp',
  default: 'now()',
} as TableColumn;
