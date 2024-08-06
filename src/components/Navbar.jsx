

const Navbar = () => {
  return (
    <>
    <div className="w-full px-20 py-4">
    <div className="flex items-center justify-between w-full px-8">
    <span className="text-3xl font-bold text-gray-900 leading-36">{"<pg />"}</span>
    <ul className="flex items-center gap-6 text-gray-600">
        <li>About</li>
        <li>Work</li>
        <li>Testimonials</li>
        <li>Contact</li>
        <li><img src="/divider.svg" alt="" /></li>
        <ul className="flex items-center gap-4">
            <li><img src="/mode.svg" alt="mode"/></li>
            <li><button className="px-4 py-1.5 bg-gray-900 text-gray-50 rounded-xl">Download CV</button></li>
        </ul>
    </ul>
    </div>
    </div>
    </>
  )
}

export default Navbar