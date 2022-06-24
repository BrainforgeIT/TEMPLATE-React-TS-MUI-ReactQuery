export const globalStyles = {
  '.flex-center': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  '.p-absolute-center': {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },

  'a, a:hover, a:focus, a:active': {
    color: 'inherit',
  },
} as const;
