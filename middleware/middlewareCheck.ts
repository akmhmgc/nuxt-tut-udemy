import { Context } from '@nuxt/types';
export default function ({ route }: Context) {
  console.log('middleware check');
  console.log('middleware', route.name);
}
