import { Fragment, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { useAuthState } from 'src/hooks';
import { SearchInput } from 'src/components';
import NavbarRight from './NavbarRight';

const Navbar: React.FC = () => {
  const [name, setName] = useState('');
  const [timer, setTimer] = useState(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { isAuthenticated } = useAuthState();

//   const searchSubs = async () => {
//     clearTimeout(timer);
//     setTimer(
//       setTimeout(async () => {
//         try {
//           const { data } = await Axios.get(`/subs/search/${name}`);
//           setSubs(data);
//           console.log(data);
//         } catch (err) {
//           console.log(err);
//         }
//       }, 250)
//     );
//   };

  return (
    <div className="sticky inset-x-0 top-0 z-10 flex items-center justify-between h-12 px-5 mt-2 bg-white">
      {/* Logo and title */}
      <div className="flex items-center">
        <Link href="/">
          <a>
          <Image width="40px" src="/images/redditFace.svg" height="40px" />
          </a>
        </Link>
        <span className="hidden text-2xl font-semibold lg:block">
        <Image
          src="/images/redditText.svg"
          width="70px"
          height="46px"
        />
        </span>
      </div>
      {/* Search Input */}
      <SearchInput onChange={() => {}} />
      {/* Auth buttons */}
      <NavbarRight loading={loading} isAuthenticated={isAuthenticated} />
    </div>
  );
};

export default Navbar;