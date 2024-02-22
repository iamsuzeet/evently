import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { publicRoutes } from '@/utils/route-path/public-routes';
import { SignIn, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import routePaths from '@/utils/route-path/route-path';
import NavItems from './NavItems';
import MobileNav from './MobileNav';

const Header = () => {
  return (
    <header className='w-full border-b'>
      <div className='wrapper flex items-center justify-between'>
        <Link href={publicRoutes.base} className='w-36'>
          <Image
            src='/assets/images/logo.svg'
            width={128}
            height={38}
            alt='Evently Logo'
          />
        </Link>
        <SignedIn>
          <nav className='md:flex-between hidden w-full max-w-xs'>
            <NavItems />
          </nav>
        </SignedIn>

        <div className='flex w-32 gap-3'>
          <SignedIn>
            <UserButton afterSignOutUrl={routePaths.base} />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild className='rounded-full' size={'lg'}>
              <Link href={publicRoutes.signIn}>Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
