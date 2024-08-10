import { useRef, useEffect } from "react";

const Drawer = ({show, toggle}) => {
    const drawerRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        toggle();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [drawerRef, toggle]);
  return (
    <>
    <div 
    className={`${!show && 'hidden'} flex flex-col gap-2 w-9/12 right-0 top-0 fixed h-full bg-white drop-shadow-2xl shadow-2xl`}
    ref={drawerRef}>
       <p>vfvf</p>
       <p>fvfvf</p>
       <p onClick={toggle}>toggle check</p>
    </div>
    </>
  )
}

export default Drawer