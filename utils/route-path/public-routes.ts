export const publicRoutes = {
  base: '/',
  events: '/event/:id',
  signIn: '/sign-in',
  signUp: '/sign-up',
} as const;

export const thirdPartyRoutes = [
  '/api/webhook/clerk',
  '/api/webhook/strip',
  '/api/uploadthing',
];

export const clerkPublicRoutes = [
  publicRoutes.base,
  publicRoutes.events,
  '/api/webhook/clerk',
  '/api/webhook/strip',
  '/api/uploadthing',
];
