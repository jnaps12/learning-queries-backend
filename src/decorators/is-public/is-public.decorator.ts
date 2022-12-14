import { SetMetadata } from '@nestjs/common';
import { IS_PUBLIC_ROUTE_KEY } from '../../constants/metadata';

export const IsPublic = () => SetMetadata(IS_PUBLIC_ROUTE_KEY, true);
