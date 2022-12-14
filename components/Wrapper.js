import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

export default function Wrapper({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + ' - Website' : 'Website'}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 justify-between items-center px-4 shadow-md">
            <Link href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 275 65"
                className="lg:w-[145px] md:w-[105px] transition-size w-[85px]"
              >
                <g fill="#666666">
                  <path d="M272.343 58.932a2.564 2.564 0 1 0 1.764.749 2.427 2.427 0 0 0-1.764-.749zM272.597 44.322a4.216 4.216 0 0 0-2.363-.74h-.406v1.509h.406a2.814 2.814 0 0 1 1.54.482 3.672 3.672 0 0 1 1.242 1.34 3.736 3.736 0 0 1 .47 1.835 2.346 2.346 0 0 1-1.306 2.135 10.862 10.862 0 0 1-5.04.826c-2.485 0-4.223-.278-5.168-.827a2.343 2.343 0 0 1-1.318-2.13 2.831 2.831 0 0 1 .117-.872l.045-.124h4.25l.169-.682a5.934 5.934 0 0 0 .06-.842 2.382 2.382 0 0 0-2.516-2.5 3.015 3.015 0 0 0-2.528 1.477 7.256 7.256 0 0 0-.971 4.109 7.967 7.967 0 0 0 2.1 5.859 8.92 8.92 0 0 0 11.518 0 7.968 7.968 0 0 0 2.1-5.859 6.539 6.539 0 0 0-.648-2.954 5.179 5.179 0 0 0-1.753-2.042zM267.14 42.347a7.252 7.252 0 1 0-5.758-2.093 7.835 7.835 0 0 0 5.758 2.093zm-5.138-9.355a18.475 18.475 0 0 1 10.275 0c.907.444 1.349.944 1.349 1.528s-.441 1.085-1.349 1.528a18.464 18.464 0 0 1-10.275 0c-.907-.444-1.348-.944-1.348-1.528s.441-1.084 1.348-1.528zM260.052 12.749a6 6 0 0 0-.772 3.06 4.369 4.369 0 0 0 1.385 3.171 4.924 4.924 0 0 0 .716.58 3.63 3.63 0 0 0-.474.345 3.712 3.712 0 0 0-1.2 2.906v2.925h1.144l.422-1.681h11.743l.422 1.681h1.144V8.543h-1.144l-.422 1.68h-10.011a7.685 7.685 0 0 1-.966-.507c-.639-.478-.963-.925-.963-1.329 0-.314.242-.623.72-.917a5.008 5.008 0 0 1 2.531-.5h7.313a2.621 2.621 0 0 0 2.938-2.925V0h-1.144l-.422 1.68h-8.684a4.791 4.791 0 0 0-2.548.719 5.035 5.035 0 0 0-1.835 2.006 6.144 6.144 0 0 0-.664 2.861 4.315 4.315 0 0 0 1.477 3.179 5.337 5.337 0 0 0 .814.62 5.407 5.407 0 0 0-1.52 1.684zm12.959 6.017h-10.006a7.692 7.692 0 0 1-.966-.507c-.639-.478-.963-.925-.963-1.33 0-.314.242-.623.72-.917a5.009 5.009 0 0 1 2.531-.5h8.684l.408 1.627z"></path>
                </g>
                <g fill="#1b1b1b">
                  <path d="M45.875 6.479q-6.421-4.833-21.221-4.833H.718v2.17H.73a18.61 18.61 0 0 1 4.309.5 25.483 25.483 0 0 1 6.043 1.944 20.924 20.924 0 0 1 1.977 1.048 3.019 3.019 0 0 1 .318.205l.074.041.045.033a16.052 16.052 0 0 1 6.118 6.58 1.342 1.342 0 0 1 .136.292c0 .008 0 .012.008.02V3.865h4.9a11.005 11.005 0 0 1 9.048 4.3q3.436 4.3 3.434 12.565s-.085 15.654-13.711 15.654c-6.968 0-10.873-3-12.576-4.782l-.021-.024c-.079-.091-.153-.184-.227-.276-.112-.14-.223-.281-.331-.424-.151-.2-.3-.4-.438-.611-.045-.066-.093-.13-.137-.2a15.423 15.423 0 0 1-.517-.827c-.022-.035-.041-.072-.062-.107a17.23 17.23 0 0 1-.374-.68c.006.014.015.027.021.04l-.023-.042c-.029-.058-.058-.115-.087-.177a15.885 15.885 0 0 1-.834-2.224 15.483 15.483 0 0 1-.611-4.653 16.615 16.615 0 0 1 .219-2.322.151.151 0 0 1 .165.139c.009.049.017.119.021.181a23.334 23.334 0 0 0 3.244 8.652c.265.415.553.835.867 1.241.062-.041.12-.078.178-.119a11.894 11.894 0 0 0 1.857-1.533 11.512 11.512 0 0 0 2.89-6.8c.016-.2.021-.39.025-.6s0-.44-.012-.661c0-.1 0-.193-.012-.288a11.353 11.353 0 0 0-3.612-7.649.248.248 0 0 0-.045-.049c-.169-.152-.334-.3-.508-.444a11.635 11.635 0 0 0-3.682-2.042 9.783 9.783 0 0 0-.409-.132 11.34 11.34 0 0 0-2.575-.448 1.038 1.038 0 0 0-.776.284l-.009.008-.1.095A16.772 16.772 0 0 0 .005 20.476c-.107 5.023 2.163 8 4.933 9.256a1.1 1.1 0 0 0 .1.041v31.693l-.491.119-3.3 1.077-.532.136v1.327h23.35v-1.319l-4.318-1.332V39.818h4.9q14.8 0 21.221-4.838t6.414-14.247q.008-9.413-6.407-14.254zM247.25 39.13a22.924 22.924 0 0 0-5.855-6.138c-2.267-1.619-5.27-3.5-8.926-5.577-3.089-1.767-5.584-3.308-7.414-4.579a18.907 18.907 0 0 1-4.514-4.368 9.122 9.122 0 0 1-1.792-5.514 9.41 9.41 0 0 1 2.326-6.558 7.223 7.223 0 0 1 5.515-2.548 11.721 11.721 0 0 1 6.851 2.086 18.793 18.793 0 0 1 5.071 5.354 25.215 25.215 0 0 1 3.341 7.419l.087.318h4.249V1.685h-2.713l-.092.046c-.1.049-.326.19-1.828 1.267a16.08 16.08 0 0 0-2.854 3.236 20.2 20.2 0 0 0-3.534-2.5 20.881 20.881 0 0 0-10.32-2.923 30.635 30.635 0 0 0-11.93 2.074 16.757 16.757 0 0 0-7.372 5.617 13.57 13.57 0 0 0-2.472 7.925 17.393 17.393 0 0 0 2.6 9.553 24.5 24.5 0 0 0 6.2 6.665 94.347 94.347 0 0 0 9.365 5.837c3.111 1.794 5.409 3.206 7.024 4.319a17.607 17.607 0 0 1 4.125 3.9 7.9 7.9 0 0 1 1.61 4.859 10.269 10.269 0 0 1-2.83 7.585 10.379 10.379 0 0 1-7.621 2.823c-5.463 0-9.975-2.477-13.408-7.36a27.04 27.04 0 0 1-3.6-7.516l-.094-.3h-4.239v17.345h2.712l.094-.049c.15-.078.755-.5 1.827-1.271a15.4 15.4 0 0 0 2.848-3.206 16.224 16.224 0 0 0 3.816 2.568 25.522 25.522 0 0 0 11.784 2.829 34.725 34.725 0 0 0 13.321-2.293 18.477 18.477 0 0 0 8.284-6.268 15.032 15.032 0 0 0 2.78-8.788 15.3 15.3 0 0 0-2.422-8.529zM145.306 39.218L117.814 7.984a22.764 22.764 0 0 0-5.134-4.57 14.188 14.188 0 0 0-7.562-1.735h-9.707v2.076l6.183 1.759v40.675h3.511V18.227l40.18 45.906h3.529V23.901h-3.511z"></path>
                  <path d="M103.229 51.784h-1.653l-.041.386c-.834 7.83-11.726 8.815-12.344 8.864H75.258V5.051l5.3-1.324V1.641H54.511v2.087l5.3 1.324v55.637l-5.3 1.324V64.1h50.591V51.786h-1.873zM145.282 1.679v17.3h3.543v-.431a13.047 13.047 0 0 1 .094-1.584c.007-.074.014-.151.033-.259l.012-.1a15.162 15.162 0 0 1 6.247-10.034l.127-.08a9.036 9.036 0 0 1 4.2-1.739c.092-.007.179-.011.267-.011h4.747v55.987l-5.3 1.319v2.087h26.051v-2.087l-5.3-1.319V4.74h4.7a8.557 8.557 0 0 1 4.471 1.747l.113.075a15.168 15.168 0 0 1 6.261 10.055l.015.119c.015.076.021.157.03.246a12.861 12.861 0 0 1 .091 1.562v.431h3.52v-17.3z"></path>
                </g>
              </svg>
            </Link>
            <div className="flex ml-2 items-center space-x-4">
              <Link href="/cart">
                <ShoppingCartIcon className="w-10 text-center" />
              </Link>
              <Link href="/login">Sign in</Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex justify-center items-center h-12 shadow-inner">
          <p>Copyright © 2022 Alina Kovaleva </p>
        </footer>
      </div>
    </>
  );
}