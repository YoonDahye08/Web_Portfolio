import Link from 'next/link'
  const Header = () => {
    return (
      <>

        <header className="bg-green-800 navheader">
          <div className="flex items-center">
            <div className="flex items-center font-bold">
              <Link href="/"><div className="text-2xl text-white">Yoon Dahye</div></Link>
            </div>

            <div className="flex items-center ml-9">
              <Link href="/" className="text-gray-300 hover:text-white mr-4"> Home </Link>
              <Link href="/about" className="text-gray-300 hover:text-white mr-4"> About Me </Link>
              <Link href="/portfolio" className="text-gray-300 hover:text-white mr-4"> Portfolio </Link>
              <Link href="/team" className="text-gray-300 hover:text-white mr-4"> Team Project </Link>
            </div>
          </div>
        </header>
      </>
      
  )
}
export default Header

