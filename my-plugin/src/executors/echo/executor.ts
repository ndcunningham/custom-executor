import { EchoExecutorSchema } from './schema';
import { type ExecutorContext, runExecutor } from '@nx/devkit';

export default async function myExecutor(options: EchoExecutorSchema, context: ExecutorContext) {
  console.info(`Executing "myExecutor"...`);
  
  for await (const output of await runExecutor<{ success: boolean }>({ project: options.project, target: 'serve' }, {}, context)) {
    if (!output.success) {
      return { success: false }
    }
  }
  return { success: true }
}
