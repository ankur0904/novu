import { IsDefined, IsOptional } from 'class-validator';
import { JobStatusEnum } from '@novu/dal';

import { EnvironmentCommand } from '../../../shared/commands';

export class UpdateJobStatusCommand extends EnvironmentCommand {
  @IsDefined()
  _jobId: string;

  @IsDefined()
  status: JobStatusEnum;

  @IsOptional()
  error?: any;
}
